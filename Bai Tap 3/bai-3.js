// Tạo mảng có tên là styles có giá trị các phần tử là “Jazz”, “Blues” 
const arrStyles = new Array("Jazz", "Blues");
arrStyles.push("Rock-n-Roll");
if (arrStyles.length %2 != 0) {
      console.log(`Cac phan tu trong mang trước khi thay doi: ${arrStyles}`);
      let indexCenter = parseInt(arrStyles.length/2);
      arrStyles[indexCenter] = "Classics";
      console.log(`Cac phan tu trong mang sau khi thay doi: ${arrStyles}`);
}

//Xoa phan tu dau tien va hien thi mang
arrStyles.shift();
console.log(`Mang sau khi xoa phan tu dau tien ${arrStyles}`);

// Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
arrStyles.unshift("Rap", "Reggae");
console.log(`Mang sau khi them 2 phan tu vao dau ${arrStyles}`);