/* 
Bài tập 1 
Quản lý tuyển sinh
*/

document.getElementById("btnTuyenSinh").onclick = () => {
  //input
  const diemChuan = document.getElementById("e1_diemChuan").value * 1;
  const khuVuc = document.getElementById("e1_chonKhuVuc").value * 1;
  const doiTuong = document.getElementById("e1_chonDoiTuong").value * 1;
  const diemMon1 = document.getElementById("e1_diemMon1").value * 1;
  const diemMon2 = document.getElementById("e1_diemMon2").value * 1;
  const diemMon3 = document.getElementById("e1_diemMon3").value * 1;
  //handle

  const total = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
  let result = "";
  if (
    total >= diemChuan &&
    diemMon1 !== 0 &&
    diemMon2 !== 0 &&
    diemMon3 !== 0
  ) {
    result = `Bạn đã <span class="text-success">đậu</span>. Tổng điểm: ${total}`;
  } else {
    result = `Bạn đã <span class="text-danger">rớt</span>. Tổng điểm: ${total}`;
  }
  //output
  document.getElementById("e1_result").innerHTML = result;
};

/* 
Bài tập 1 
Tính tiền điện
*/

document.getElementById("btnTienDien").onclick = () => {
  //input
  const hoVaTen = document.getElementById("e2_hoVaTen").value;
  const soKw = document.getElementById("e2_soKw").value * 1;
  //handle
  let result = "";
  if (soKw <= 50) {
    const total = soKw * 500;
    result = `Họ tên: ${hoVaTen}, Tiền điện: ${total.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}`;
  } else if (100 >= soKw && soKw > 50) {
    const total = 50 * 500 + (soKw - 50) * 650;
    result = `Họ tên: ${hoVaTen}, Tiền điện: ${total.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}`;
  } else if (200 >= soKw && soKw > 100) {
    const total = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    result = `Họ tên: ${hoVaTen}, Tiền điện: ${total.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}`;
  } else if (350 >= soKw && soKw > 200) {
    const total = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    result = `Họ tên: ${hoVaTen}, Tiền điện: ${total.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}`;
  } else {
    const total =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    result = `Họ tên: ${hoVaTen}, Tiền điện: ${total.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}`;
  }

  //output
  document.getElementById("e2_result").innerHTML = result;
};

/* 
Bài tập 3
Tinh thuế thu nhập cá nhân
*/

document.getElementById("btnTinhThue").onclick = () => {
  //input
  const hoVaTen = document.getElementById("e3_hoVaTen").value;
  const thuNhap = document.getElementById("e3_thuNhap").value * 1;
  const nguoiPhuThuoc = document.getElementById("e3_nguoiPhuThuoc").value * 1;
  //handle
  let result = "";
  const thuNhapChiuThue = thuNhap - 4e6 - nguoiPhuThuoc * 1.6e6;
  if (thuNhapChiuThue <= 60e6) {
    const total = thuNhapChiuThue * 0.05;
    result = `Họ tên: ${hoVaTen}, Tiền thuế thu nhập cá nhân: ${total.toLocaleString(
      "vi",
      { style: "currency", currency: "VND" }
    )}`;
  } else if (120e6 >= thuNhapChiuThue && thuNhapChiuThue > 60e6) {
    const total = 60e6 * 0.05 + (thuNhapChiuThue - 60e6) * 0.1;
    result = `Họ tên: ${hoVaTen}, Tiền thuế thu nhập cá nhân: ${total.toLocaleString(
      "vi",
      { style: "currency", currency: "VND" }
    )}`;
  } else if (210e6 >= thuNhapChiuThue && thuNhapChiuThue > 120e6) {
    const total = 60e6 * 0.05 + 60e6 * 0.1 + (thuNhapChiuThue - 120e6) * 0.15;
    result = `Họ tên: ${hoVaTen}, Tiền thuế thu nhập cá nhân: ${total.toLocaleString(
      "vi",
      { style: "currency", currency: "VND" }
    )}`;
  } else if (384e6 >= thuNhapChiuThue && thuNhapChiuThue > 210e6) {
    const total =
      60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (thuNhapChiuThue - 210e6) * 0.2;
    result = `Họ tên: ${hoVaTen}, Tiền thuế thu nhập cá nhân: ${total.toLocaleString(
      "vi",
      { style: "currency", currency: "VND" }
    )}`;
  } else if (624e6 >= thuNhapChiuThue && thuNhapChiuThue > 384e6) {
    const total =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      (thuNhapChiuThue - 384e6) * 0.25;
    result = `Họ tên: ${hoVaTen}, Tiền thuế thu nhập cá nhân: ${total.toLocaleString(
      "vi",
      { style: "currency", currency: "VND" }
    )}`;
  } else if (960e6 >= thuNhapChiuThue && thuNhapChiuThue > 624e6) {
    const total =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      336e6 * 0.25 +
      (thuNhapChiuThue - 624e6) * 0.3;
    result = `Họ tên: ${hoVaTen}, Tiền thuế thu nhập cá nhân: ${total.toLocaleString(
      "vi",
      { style: "currency", currency: "VND" }
    )}`;
  } else if (thuNhapChiuThue > 960e6) {
    const total =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      336e6 * 0.25 +
      240e6 * 0.3 +
      (thuNhapChiuThue - 960e6) * 0.35;
    result = `Họ tên: ${hoVaTen}, Tiền thuế thu nhập cá nhân: ${total.toLocaleString(
      "vi",
      { style: "currency", currency: "VND" }
    )}`;
  }
  //output
  document.getElementById("e3_result").innerHTML = result;
};

/* 
Bài tập 4
Tinh tiền cáp
*/

//Lắng nghe thay đổi value của select để hiện được số kết nối
document.getElementById("selCustomer").onchange = () => {
  const selectCustomer = document.getElementById("selCustomer").value;
  const input = document.getElementById("e4_soKetNoi");
  if (selectCustomer === "" || selectCustomer === "user") {
    input.setAttribute("disabled", true);
  } else if (selectCustomer === "company") {
    input.removeAttribute("disabled");
  }
};

document.getElementById("btnTienCap").onclick = () => {
  //input
  const selectCustomer = document.getElementById("selCustomer").value;
  const maKhachHang = document.getElementById("e4_maKhachHang").value;
  const soKenhCaoCap = document.getElementById("e4_soKenhCaoCap").value * 1;
  const soKetNoi = document.getElementById("e4_soKetNoi").value * 1;

  const PHI_HOA_DON_USER = 4.5;
  const PHI_DICH_VU_USER = 20.5;
  const THUE_KENH_USER = 7.5;
  const PHI_HOA_DON_COMP = 15;
  const PHI_DICH_VU_COMP = 75;
  const THUE_KENH_COMP = 50;
  //handle
  let result = "";
  if (selectCustomer === "user") {
    total = PHI_HOA_DON_USER + PHI_DICH_VU_USER + soKenhCaoCap * THUE_KENH_USER;
    result = `Mã khách hàng: ${maKhachHang}, Tiền cáp: <span class='text-danger'>$${total.toLocaleString(
      "en-US",
      { style: "decimal", minimumFractionDigits: 2 }
    )}</span>`;
  } else if (selectCustomer === "company") {
    if (soKetNoi <= 10) {
      total =
        PHI_HOA_DON_COMP + PHI_DICH_VU_COMP + soKenhCaoCap * THUE_KENH_COMP;
      result = `Mã khách hàng: ${maKhachHang}, Tiền cáp: <span class='text-danger'>$${total.toLocaleString(
        "en-US",
        { style: "decimal", minimumFractionDigits: 2 }
      )}</span>`;
    } else {
      total =
        PHI_HOA_DON_COMP +
        PHI_DICH_VU_COMP +
        soKenhCaoCap * THUE_KENH_COMP +
        (soKetNoi - 10) * 5;
      result = `Mã khách hàng: ${maKhachHang}, Tiền cáp: <span class='text-danger'>$${total.toLocaleString(
        "en-US",
        { style: "decimal", minimumFractionDigits: 2 }
      )}</span>`;
    }
  } else {
    alert("Vui lòng chọn loại khách hàng");
  }
  //output
  document.getElementById("e4_result").innerHTML = result;
};
