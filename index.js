let slideIndex=5;

function showSlides(props){
    let i;
    let slides=document.getElementsByClassName("singleSlide")

    if(props>slides.length){
        slideIndex=1;
    }

    if (props < 1){
        slideIndex=slides.length;
    }

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slideIndex - 1].style.display = "flex";
}
function plusSlides(a){
    showSlides((slideIndex += a));
}
plusSlides(slideIndex);

function openDialog() {
    document.getElementById('overlay').style.display = 'flex';
  }

  function closeDialog() {
    var agreeCheckbox = document.getElementById('agreeCheckbox');
    var a = "";

    if (agreeCheckbox.ckecked)
      a = true;

    if(a=true){
      alert("感謝您的同意！");
      
      document.getElementById('overlay').style.display = 'none'; 
    } else {
      alert("很抱歉，您似乎不同意。");
    }
  }


  const marquee = document.querySelector('.marquee p');

  function startMarquee() {
      marquee.style.animationPlayState = 'running';
  }

  function stopMarquee() {
      marquee.style.animationPlayState = 'paused';
  }