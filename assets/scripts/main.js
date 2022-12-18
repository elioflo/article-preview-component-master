const btn = document.getElementById('btn')
let toggleBtn = false

btn.addEventListener('click',()=>{
    const toggle = document.getElementsByClassName('toggle')[0]
    if(toggleBtn){
        toggle.classList.remove('toggle--dark')
        toggle.getElementsByClassName('contact')[0].style.display = 'none'
        toggle.getElementsByClassName('user')[0].style.display = 'flex'
        btn.getElementsByTagName('img')[0].src = './assets/images/icon-share-dark.svg'
        btn.classList.remove('toggle__btn--clicked')
    }else{
        toggle.classList.add('toggle--dark')
        toggle.getElementsByClassName('user')[0].style.display = 'none'
        toggle.getElementsByClassName('contact')[0].style.display = 'flex'
        btn.getElementsByTagName('img')[0].src = './assets/images/icon-share-white.svg'
        btn.classList.add('toggle__btn--clicked')
    }

    toggleBtn = !toggleBtn
})

