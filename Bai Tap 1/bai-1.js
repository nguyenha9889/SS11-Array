// Nhap 5 so nguyen cho mang tu ban phim va hien thi

const arrInt = new Array();
for (let i = 0; i < 5; i++) {
	arrInt[i] = Number(prompt("Nhap vao so nguyen bat ky: "));
}
console.log("Mang: " + arrInt);

// In phan tu co gia tri chan va tinh tong
let sumEvens = 0;
let arrEvens = "";
for (let i = 0; i < arrInt.length - 1; i++) {
	if (arrInt[i] % 2 == 0) {
		sumEvens += arrInt[i];
		arrEvens += arrInt[i] + " ";
	}
}
console.log("Cac phan tu chan: " + arrEvens + " --- Tong: " + sumEvens);

// In cac phan tu co chi so le va tinh tong
let sumOddIndex = 0;
let arrOddIndex = "";
for (let i = 1; i < arrInt.length - 1; i += 2) {
	arrOddIndex += arrInt[i] + " ";
	sumOddIndex += arrInt[i];
}
console.log(
	"Cac phan tu co index le: " + arrOddIndex + " --- Tong: " + sumOddIndex
);

// In cac phan tu la so nguyen to
let arrPrime = "";
for (let i = 0; i < arrInt.length - 1; i++) {
	for (let n = 2; n <= Math.sqrt(arrInt[i]); n++) {
		if (arrInt[i] % n != 0) {
			arrPrime += arrInt[i] + " ";
		}
		break;
	}
}
console.log("So nguyen to: " + arrPrime);

// In Min hoac Max
let idmin,
	idmax = 0;
for (let i = 0; i < arrInt.length - 1; i++) {
	if (arrInt[i] > arrInt[i + 1]) {
		idmin = i + 1;
	}
}
console.log(`Min: ${arrInt[idmin]}`);
for (let i = 0; i < arrInt.length - 1; i++) {
	if (arrInt[i] > arrInt[i + 1]) {
		idmax = i;
	}
}
console.log(`Max: ${arrInt[idmax]}`);

// Sap xep mang giam dan --- Khong dung Sort
for (let i = 0; i < arrInt.length - 1; i++) {
	for (let j = i + 1; j < arrInt.length; j++) {
		if (arrInt[i] < arrInt[j]) {
			let temp = arrInt[i];
			arrInt[i] = arrInt[j];
			arrInt[j] = temp;
		}
	}
}
console.log(`Mang sap xep giam dan khong sort: ${arrInt}`);

//Sap xep mang giam dan --- Su dung Sort
arrInt.sort((a, b) => b - a);
console.log(`Mang giam dan su dung SORT: ${arrInt}`);

// Nhap vao so nguyen va thong ke co bao nhieu phan tu co gia tri nhu vay
arrInt[5] = Number(prompt("Nhap them so nguyen bat ky: "));
console.log(`Mang moi sau khi them phan tu: ${arrInt}`);
let countOccur = 0;
let isOccur;
for (let i = 0; i < arrInt.length - 1; i++) {
	if (arrInt[i] == arrInt[5]) {
		isOccur = true;
		countOccur += 1;
	} else {
		isOccur = false;
	}
}

if (isOccur) {
	console.log(`So lan xuat hien: ${countOccur}`);
} else {
	console.log(`So lan xuat hien: ${countOccur}`);
}
