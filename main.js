var arrNumber = [];
document.getElementById('btnNhapSo').onclick = function () {
    var themSo = Number(document.getElementById('themSo').value);
    var ketQuaThemSo = '';
    arrNumber.push(themSo);
    ketQuaThemSo = "[" + arrNumber + "]";
    document.getElementById('ketQuaDe').innerHTML = ketQuaThemSo;
}

/*
Bài tập 1: tính tổng các số dương

Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        => đem so sánh từng giá trị >0 nếu lớn hơn 0 thì cộng vào biến tổng 
Đầu ra : Xuất ra tổng các số dương
*/
document.getElementById('btnTongSoDuong').onclick = function () {
    var tinhTong = 0;
    for (var soHang = 0; soHang < arrNumber.length; soHang++)
        if (arrNumber[soHang] > 0) {
            tinhTong += arrNumber[soHang]
        }
    document.getElementById('ketQua_b1').innerHTML = tinhTong;
}
/*
Bài tập 2 : Đếm các số dương
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        => đem so sánh từng giá trị >0 nếu lớn hơn 0 thì biến đếm cộng +1 
Đầu ra : Xuất ra đếm các số dương trong mảng
*/
document.getElementById('btnDemSoDuong').onclick = function () {
    var demSoDuong = 0;
    for (var soHang = 0; soHang < arrNumber.length; soHang++) {
        if (arrNumber[soHang] > 0) {
            demSoDuong++;
        }
    }
    document.getElementById('ketQua_b2').innerHTML = "Số dương là : " + demSoDuong
}
/*
Bài tập 3:Tìm số nhỏ nhất
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        => soNhoNhat > arrNumber[soHang]) 
          thì  soNhoNhat = arrNumber[soHang];
Đầu ra : Xuất ra số nhỏ nhất trong mảng
*/
document.getElementById('btnTimSo').onclick = function () {
    var soNhoNhat = arrNumber[0];
    for (var soHang = 0; soHang < arrNumber.length; soHang++) {
        if (soNhoNhat > arrNumber[soHang]) {
            soNhoNhat = arrNumber[soHang];
        }
    }
    document.getElementById('ketQua_b3').innerHTML = soNhoNhat;
}
/*
bài tập 4 : Tìm số dương nhỏ nhất
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        => soDuongNN > arrNumber[soHang]) && arrNumber[soHang] >0 
          thì  soDuongNN = arrNumber[soHang];
Đầu ra : Xuất ra số dương nhỏ nhất trong mảng
*/
document.getElementById('btnTimSoDNN').onclick = function () {
    var soDuongNN = arrNumber[0];
    for (var soHang = 0; soHang < arrNumber.length; soHang++) {
        if ((arrNumber[soHang] > 0) && (soDuongNN > arrNumber[soHang])) {
            soDuongNN = arrNumber[soHang];
        }
    }
    document.getElementById('ketQua_b4').innerHTML = "Số dương nhỏ nhất là : " + soDuongNN;
}
/*
bài tập 5 : Tìm số chẵn cuối cùng
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        => soChanCC = arrNumber[soHang]) && arrNumber[soHang] % 2 === 0 && arrNumber > 0
          thì  soChanCC = arrNumber[soHang];
Đầu ra : Xuất ra số chẵn cuối cùng trong mảng
*/
document.getElementById('btnTimSoChanCC').onclick = function () {
    var soChanCC = -1;
    for (var soHang = 0; soHang < arrNumber.length; soHang++) {
        if ((arrNumber[soHang] > 0) && (arrNumber[soHang] % 2 === 0)) {
            soChanCC = "Số chẵn cuối cùng là: " + arrNumber[soHang];
        }
    }
    document.getElementById('ketQua_b5').innerHTML = soChanCC;
}

/*
bài tập 6 : đổi chỗ 2 số 
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : tạo biến tạm  và gán biến tạm = viTri1 lúc này vị trí 1 đã trống tiếp tục gán viTri1 = viTri2  => vị trí 2 trống gán viTri2 = biến tạm
Đầu ra : Xuất ra mảng đã đổi vị trí 
*/
document.getElementById('btnDoiCho').onclick = function () {
    var viTri1 = Number(document.getElementById('viTri1').value)
    var viTri2 = Number(document.getElementById('viTri2').value)
    var temp = 0;
    temp = arrNumber[viTri1]
    arrNumber[viTri1] = arrNumber[viTri2];
    arrNumber[viTri2] = temp;
    document.getElementById('ketQua_b6').innerHTML = arrNumber;
}
/*
bài tập 7: sắp xêp mảng theo thứ tự tăng dần
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí :  sử dụng hàm score.sort như ở bên dưới
Đầu ra : Xuất ra mảng đã sắp xếp vị trí
*/
document.getElementById('btnSapXep').onclick = function () {
    var score = arrNumber;
    score.sort(function (a, b) { return a - b });

    document.getElementById('ketQua_b7').innerHTML = arrNumber;
}
/*
Bài tập 8: tìm số nguyên tố đầu tiên trong mảng
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí :  tạo hàm kiểm tra số nguyên tố
    + đặt cờ hiệu kiemtra = true
    nếu id<= 1 kiemtra =false
    tạo vòng lặp for(var uoc = 2; uoc <= id1 / 2; uoc++)
    nếu id % uoc == 0  biến kiemtra = false và dừng vòng lặp
    sau đó tại hàm chính nếu hàm kiemtra =true ở giá trị mảng nào thì xuất ra giá trị đó
    ngược lại thì xuất không có số nguyên tố đó
Đầu ra : Xuất ra giá trị số nguyên tố đầu tiên
*/
document.getElementById('btnSoNguyenTo').onclick = function(){
    var ketQuab8 = '';
    // var songuyento = arrNumber[0];
    for(var soHang=0; soHang<arrNumber.length; soHang++){
        var kiemTra = kiemTraSoNguyenTo(arrNumber[soHang]);
        if(kiemTra === true){ //Nếu kiemTra =  true
            ketQuab8 = arrNumber[soHang]+ ' là số nguyên tố đầu tiên';
            break;
        }
        else{
            ketQuab8 = "Không có số nguyên tố !"
        }
    }
    document.getElementById('ketQua_b8').innerHTML = ketQuab8;

}

//Viết hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(id1) {//input 1 số 5
    //Biến kiểm tra là output: Đúng là số nguyên tố => true, sai là false
    var kiemTra = true;
    if(id1<=1){
        kiemTra = false;
    }
    for (var uoc = 2; uoc <= id1 / 2; uoc++) {
        //Mỗi lần duyệt qua 1 ước thì kiểm tra ước đó 
        if (id1 % uoc == 0) {
            // ước lớn hơn 3
            kiemTra = false;
            break;
        }
    }
    return kiemTra;
}
/*
Bài tập 9 đếm số nguyên
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng mới number1
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
            => dùng hàm Number.isInteger để biết giá trị đó là số nguyên hay ko giá trị trả về true và nếu là true thì biến đếm +1
Đầu ra : Xuất ra có bao nhiêu số nguyên
*/
var arrNumber1 = [];
document.getElementById('btnNhapSo1').onclick = function () {
    var themSo1 = Number(document.getElementById('themSo1').value);
    var ketQuaThemSo1 = '';
    arrNumber1.push(themSo1);
    ketQuaThemSo1 = "[" + arrNumber1 + "]";
    document.getElementById('ketQua_b91').innerHTML = ketQuaThemSo1;
}
document.getElementById('btnDemSoNguyen').onclick = function () {
    var dem = 0;
    for (var soHang = 0; soHang <= arrNumber1.length; soHang++) {
        if (Number.isInteger(arrNumber1[soHang]) == true) {
            dem++
        }
    }
    document.getElementById('ketQua_b9').innerHTML = "Mảng có " + dem + " số nguyên";
}
/*
Bài 10 : So sánh lượng số âm và số dương trong mảng
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        =>  arrNumber[soHang] > 0 
          thì soDuong ++
           =>  arrNumber[soHang] < 0 
          thì soAm ++
          sau đó tiến hành so sánh số lượng số âm và số lượng số dương
Đầu ra : Xuất ra sự so sánh số âm và số dương trong mảng
*/
document.getElementById('btnSoSanh').onclick = function () {
    var soDuong = 0;
    var soAm = 0;
    ketQua_b10 = '';
    for (var soHang = 0; soHang <= arrNumber.length; soHang++) {
        if (arrNumber[soHang] > 0) {
            soDuong++;
        }
        else if (arrNumber[soHang] < 0) {
            soAm++;
        }
    }
    if (soAm > soDuong) {
        ketQua_b10 = "số âm > số dương";
    }
    else if (soAm < soDuong) {
        ketQua_b10 = " số dương > số âm ";
    }
    else {
        ketQua_b10 = "số âm = số dương";
    }
    document.getElementById('ketQua_b10').innerHTML = ketQua_b10;
}