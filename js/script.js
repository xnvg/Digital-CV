const privateInfoEl = document.querySelector("#private-info");
const privateInfoFormEl = document.querySelector(".private-info-form");
const inputEmail = document.querySelector(".input-email");
const txtErrorMessage = document.querySelector(".message");

const btnShowPrivateInfo = document.querySelector("#submit");

const btnsShowMore = document.querySelectorAll(".btn-show-more");
const txtsShowMore = document.querySelectorAll(".content-show-more");
const moreInfoSections = document.querySelectorAll(".more-info-section");
const arrowsShowMore = document.querySelectorAll(".arrow-show-more");
const linksProject = document.querySelectorAll(".link-project");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Hiện thông tin cá nhân sau khi nhập đúng định dạng email
btnShowPrivateInfo.addEventListener("click", function () {
  console.log("" + inputEmail.value);
  if (regex.test(inputEmail.value)) {
    privateInfoEl.classList.toggle("hidden");
    privateInfoFormEl.classList.toggle("hidden");
    txtErrorMessage.classList.add("hidden");
  } else {
    txtErrorMessage.classList.remove("hidden");
  }
});

// Show message invalid email
// inputEmail.addEventListener('invalid', function(){
//   this.setCustomValidity('Nhập sai định dạng');
// });

// Dùng vòng lặp để tạo các event tại các nút xem thêm ở .more-info-section và đổi dấu mũi tên lên xuống
for (let i = 0; i < btnsShowMore.length; i++) {
  btnsShowMore[i].addEventListener("click", function () {
    // console.log(btnsShowMore[i]);
    txtsShowMore[i].classList.toggle("hidden");
    arrowsShowMore[i].classList.toggle("arrow-up");

    moreInfoSections[i].classList.toggle("fit-content"); // css lại content sau khi nhấn xem thêm
  });
}

// Dùng vòng lặp để tạo event khi nhập vào các dự án
for (let i = 0; i < linksProject.length; i++) {
  linksProject[i].addEventListener("click", function () {
    // Sang trang digital-cv.html => truyền thêm 1 dữ liệu index(p=1, p=2, p=3) để trang kia biết project nào để hiện ra dữ liệu đúng
    // window.location sẽ đổi url hiện tại nên đổi thành open để target: _blank 
    // window.location.href = `digital-cv.html?p=${i + 1}`;
      window.open(`digital-cv.html?p=${i + 1}`,'_blank')
  });
}
