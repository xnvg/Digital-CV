const privateInfoEl = document.querySelector("#private-info");
const privateInfoFormEl = document.querySelector(".private-info-form");
const inputEmail = document.querySelector(".input-email");

const btnShowPrivateInfo = document.querySelector("#submit");

const btnsShowMore = document.querySelectorAll(".btn-show-more");
const txtsShowMore = document.querySelectorAll(".content-show-more");
const moreInfoSections = document.querySelectorAll(".more-info-section")
const arrowsShowMore = document.querySelectorAll(".arrow-show-more");
const linksProject = document.querySelectorAll(".link-project");

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Show hidden info
btnShowPrivateInfo.addEventListener('click', function(){
  console.log(""+inputEmail.value);
  if(regex.test(inputEmail.value)){
    privateInfoEl.classList.toggle('hidden');
    privateInfoFormEl.classList.toggle('hidden');
  }
});

// Show message invalid email
inputEmail.addEventListener('invalid', function(){
  this.setCustomValidity('Nhập sai định dạng');
});

// create events for 6 btn view-more
for(let i=0; i<btnsShowMore.length;i++){
  btnsShowMore[i].addEventListener('click', function(){
  // console.log(btnsShowMore[i]);
  txtsShowMore[i].classList.toggle('hidden');
  arrowsShowMore[i].classList.toggle('arrow-up');
  moreInfoSections[i].classList.toggle('fit-content');
  });
  
}
for(let i=0;i<linksProject.length;i++){
  linksProject[i].addEventListener('click', function(){
    window.location.href = `digital-cv.html?p=${i+1}`;
    
  });
}