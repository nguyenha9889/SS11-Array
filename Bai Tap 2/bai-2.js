// Khai bao mang 2 chieu va nhap gia tri Elements tu ban phim
const arrInt = new Array();

let row = Number(prompt("Nhap số hàng của Mảng: "));
for (let i = 0; i < row; i++) {
	arrInt[i] = prompt(
		"Nhập vào dãy số nguyên (phân tách bởi dấu phẩy) cho mỗi hàng "
	);
	arrInt[i] = arrInt[i].split(",");
	let strArr = "";
	for (let j = 0; j < arrInt[i].length; j++) {
		strArr += arrInt[i][j] + ",";
	}
	console.log(`Cac phan tu tren moi dong: ${strArr}`);
}

// In giá trị các phần tử nằm trên đường biên
let isArrBorderLine;
for (let i = 0; i < arrInt.length - 1; i++) {
	if (arrInt[i].length == arrInt[i + 1].length) isArrBorderLine = true;
	else isArrBorderLine = false;
}
if (isArrBorderLine) {
	for (let i = 0; i < arrInt.length; i++) {
		for (let j = 0; j < arrInt[i].length; j++) {
			if (
				i == 0 ||
				i == arrInt.length - 1 ||
				j == 0 ||
				j == arrInt[i].length - 1
			) {
				console.log(
					`Gia tri cac phan tu nam tren duong bien ${arrInt[i][j]}`
				);
			}
		}
	}
} else console.log("No border line in array");

// In cac phan tu tren duong cheo chinh
let arrHasDiagoLine;
const arrLeftSide = new Array();
for (let i = 0; i < arrInt.length; i++) {
	arrLeftSide.push(arrInt[i][0]);
}
if (arrLeftSide.length == arrInt[0].length && isArrBorderLine == true)
	arrHasDiagoLine = true;
else arrHasDiagoLine = false;

if (arrHasDiagoLine) {
	for (let i = 0; i < arrInt.length; i++) {
		for (let j = i; j < arrInt[i].length; j++) {
			console.log(
				`Cac phan tu tren duong cheo chinh: ${arrInt[i][j]}`
			);
			break;
		}
	}
} else {
	console.log("No main diagoline");
}

// In cac phan tu tren duong cheo phu
if (arrHasDiagoLine) {
	for (let i = 0; i < arrInt.length; i++) {
		console.log(
			`Cac phan tu tren duong cheo phu: ${
				arrInt[i][arrInt[i].length - i - 1]
			}`
		);
	}
} else {
	console.log("No main diagoline");
}

// Sap xep mang tang dan theo dong --- dung Sort
for (let i = 0; i < arrInt.length; i++) {
	arrInt[i].sort((a, b) => a - b);
	console.log(
		`Ket qua sap xep cac phan tu tang dan tren moi dong voi SORT ${arrInt[i]}`
	);
}

// Sap xep mang tang dan theo dong --- KHONG sort
let minIndex;
for (let i = 0; i < arrInt.length; i++) {
	for (let j = 0; j < arrInt[i].length - 1; j++) {
		for (let k = j + 1; k < arrInt[i].length -1 -i; k++) {
			if (arrInt[i][j] > arrInt[i][k]) {
				let temp = arrInt[j][k];
				arrInt[j][k] = arrInt[i][j];
				arrInt[i][j] = temp;
			}
		}
	}
	console.log(`Sap xep KHONG sort: ${arrInt[i]}`);
}
