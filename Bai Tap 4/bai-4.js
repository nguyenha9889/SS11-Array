// Khai báo mảng một chiều và nhập prompt đến khi nhập một giá trị không phải là số, chuỗi trống hoặc nhấn “Cancel”
const myArray = new Array();
let input;
do {
      input = prompt("Nhap so nguyen bat ky: ");
      if (!isNaN(input) && input != "" && input != null) {
            myArray.push(Number(input));
      }
} while (!isNaN(input) && input != "" && input != null);

// Tinh Sum
let sum = 0;
for (let item of myArray) {
      console.log(item);
      sum += item;
}
console.log(`Tong gia tri cac phan tu trong mang ${sum}`);

// In ra phan tu Max Min - KHONG dung ham Math.max
let max;
for (let i = 0; i < myArray.length-1; i++) {
      if (myArray[i] > myArray[i+1]) max = myArray[i];
}
console.log(`Gia tri lon nhat ${max}`);

let min;
for (let i = 0; i < myArray.length -1; i++) {
      if (myArray[i] > myArray[i+1]) {
            min = myArray[i+1];
      }
}
console.log(`Gia tri nho nhat ${min}`);

// In ra phan tu Max Min - dung ham Math.max
console.log(`Math.max ${Math.max(21, 13, 15, 16, 20)}`);
console.log(`Math.min ${Math.min(21, 13, 15, 16, 20)}`);