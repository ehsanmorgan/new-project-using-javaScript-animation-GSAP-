


const menu = document.querySelector('.menu-btn2')
function navToggle(e){
if(!e.target.classList.contains('active'))  {
    e.target.classList.add('active')



gsap.to('.line2',0.5,{rotate:"-45",y:-4 ,color:"black"})
gsap.to('.line3',0.5,{rotate:"45" ,color:"black"})
gsap.to('.logo',{color:"black"})
gsap.to('.menu-window',{clipPath:"circle(2500px at 100%)"})

} 
else{
    e.target.classList.remove('active')


    gsap.to('.line1',0.5,{rotate:"0",color:"white"})
    gsap.to('.line2',0.5,{rotate:"0" ,color:"white"})
    gsap.to('.line3',{rotate:"0" ,color:"white"})
    gsap.to('.logo',{color:"white"})
    gsap.to('.menu-window',{clipPath:"circle(0px at 100%)"})
}
}

menu.addEventListener('click',navToggle)