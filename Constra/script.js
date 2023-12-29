
const searchbutton=document.getElementById('search-button');
const closebutton=document.getElementById('close-button');
const searchbar=document.getElementById('search-bar');

closebutton.style.display="none";
searchbar.style.display="none";

searchbutton.addEventListener('click',function(){
    this.style.display="none";
    searchbar.style.display="block";
    closebutton.style.display="block"
})
closebutton.addEventListener('click',function(){
    this.style.display="none";
    searchbar.style.display="none";
    searchbutton.style.display="block"
})


// ######################## slider #############################

const slider=document.querySelector('.slider');
let currentslide=0;
const slidecount=slider.children.length;
let slideInterval=5000;

function updateslide(){
    slider.style.transition.transform= 'transform';
    slider.style.transition = {
      duration: 1000,
      timingFunction: 'ease-in'
    };
    slider.style.transform=`translateX(-${currentslide * 100}%)`
   
}
function nextslide(){
    if(currentslide < slidecount-1){
        currentslide++;
     
    } else{
         currentslide =0;
    }
    updateslide();
}
function prevslide(){
    if(currentslide > 0){
        currentslide--;
     
    } else{
         currentslide =slidecount-1;
    }
    updateslide();
}

let autoSlideIntervalId = setInterval(nextslide, slideInterval);

// slider.addEventListener('mouseleave', () => {
//     autoSlideIntervalId = setInterval(nextslide, slideInterval);
//   });


// ########################## our banner ########################

const ourbanner=document.getElementById('our-banner');
const closebanner=document.getElementById('banner-close');

window.addEventListener('load',function(){
    function openBanner(){
            ourbanner.style.display = 'block';
        }
        setTimeout(openBanner, 10000);  
})
closebanner.addEventListener('click',function(){
    ourbanner.remove();
})

// ####################### card button #########################

const cardbtn=document.querySelectorAll('.card-button');
const iconbtn=document.querySelector('.arrow-btn');
// iconbtn.style.color="white";
cardbtn.forEach(btn=>{
    btn.addEventListener('click',function(){
        btn.classList.toggle('btn-color')

        // const iconbtn=document.querySelector('.arrow-btn');
            iconbtn.classList.remove('.arrow-btn')
            iconbtn.classList.toggle('text-warning')
            
     
        
    })
})

// ########################## Projects ##############################

const cardoverlays=document.querySelectorAll('.card-img-overlay');
const cardimg=document.querySelectorAll('.card-img');
cardoverlays.forEach(overlay=>{
    overlay.style.visibility ="hidden";
    overlay.style.pointerEvents = "none";
})
cardimg.forEach((img,index)=>{

    img.addEventListener('mouseover',function(){
       cardoverlays[index].style.visibility="visible";
    })
    img.addEventListener('mouseout',function(){
       cardoverlays[index].style.visibility="hidden";
    })
})


// ############################ Projects cards #############################
const showallbtn=document.getElementById('showall-btn')
const commercialbtn=document.getElementById('Commercial-btn')
const educationbtn=document.getElementById('Eduacation-btn')
const govtbtn=document.getElementById('Government-btn')
const infrabtn=document.getElementById('Infrastructure-btn')
const residentbtn=document.getElementById('Residential-btn')
const healthbtn=document.getElementById('Healthcare-btn')



const commcard=document.getElementById('commercial-card')
const governmentcard=document.getElementById('government-card')
const residentialcard=document.getElementById('residential-card')
const educatcard=document.querySelectorAll(".education-card")
const healthcard=document.getElementById("healthcare-card")


showallbtn.addEventListener('click',function(){
    governmentcard.style.display='block';
    residentialcard.style.display='block';
    commcard.style.display='block';
    educatcard.forEach(card=>{
        card.style.display='block';
    })
    healthcard.style.display="block";
})
commercialbtn.addEventListener('click',function(){
    governmentcard.style.display='none';
    residentialcard.style.display='none';
    commcard.style.display='block';
    educatcard.forEach(card=>{
        card.style.display='none';
    })
    healthcard.style.display="none";
})

educationbtn.addEventListener('click',function(){
    governmentcard.style.display='none';
    residentialcard.style.display='none';
    commcard.style.display='none';
    healthcard.style.display="none";
    educatcard.forEach(card=>{
        card.style.display='block';
    })
})
govtbtn.addEventListener('click',function(){
    governmentcard.style.display='block';
    residentialcard.style.display='none';
    commcard.style.display='none';
    healthcard.style.display="none";
    educatcard.forEach(card=>{
        card.style.display='none';
    })
})
infrabtn.addEventListener('click',function(){
    governmentcard.style.display='block';
    residentialcard.style.display='block';
    commcard.style.display='block';
    residentialcard.style.display='none';
    educatcard.forEach(card=>{
        card.style.display='none';
    })
})
residentbtn.addEventListener('click',function(){
    residentialcard.style.display='block';
    governmentcard.style.display='none';
    commcard.style.display='block';
    residentialcard.style.display='none';
    educatcard.forEach(card=>{
        card.style.display='none';
    })
})
healthbtn.addEventListener('click',function(){
    healthcard.style.display="block";
    residentialcard.style.display='none';
    commcard.style.display='none';
    residentialcard.style.display='none';
    educatcard.forEach(card=>{
        card.style.display='none';
    })
})
  
// ####################### Testimonial slide ##################

const testimonialSlider = document.getElementById('testimonial-slide');
const testimonialSlides = testimonialSlider.children.length;
const dots = document.querySelectorAll('.dot');
let currentTestimonial = 0;

function updateTestimonial() {
  testimonialSlider.style.transform = `translateX(-${currentTestimonial * 100}%)`;
}

function showTestimonial(index) {
  currentTestimonial = index;
  updateTestimonial();
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach((dot) => {
        dot.classList.remove('bg-info');
      });
  
      dot.classList.add('bg-info');
  
      showTestimonial(index);
    });
  });
  
// ########################## scroll btn ######################


