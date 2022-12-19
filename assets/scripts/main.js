const btn = document.getElementById('btn')
const toggle = document.getElementsByClassName('toggle')[0]

btn.addEventListener('click',()=>{
    toggle.classList.toggle('toggle--dark')
    toggle.getElementsByClassName('user')[0].classList.toggle('user--clicked')
    toggle.getElementsByClassName('contact')[0].classList.toggle('contact--clicked')
    btn.getElementsByTagName('img')[0].src = btn.classList.toggle('toggle__btn--clicked') ? './assets/images/icon-share-white.svg':'./assets/images/icon-share-dark.svg'
})

