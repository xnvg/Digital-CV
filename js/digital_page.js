const project01El = document.querySelector(".project-info-1");
const project02El = document.querySelector(".project-info-2");
const project03El = document.querySelector(".project-info-3");
function bodyLoad(){
  let x = window.location.href.slice(window.location.href.length-1,window.location.href.length);
  if(x==1){
    project01El.classList.toggle('hidden');
  }else if(x==2){
    project02El.classList.toggle('hidden');
  }else if(x==3){
    project03El.classList.toggle('hidden');
  }
}