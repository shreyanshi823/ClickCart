const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')


// document.querySelector(".ham").addEventListener("click",()=>{
  // document.querySelector(".navbar").style.navbar = "0"
// })


if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}


