const btn = document.getElementById('btn')
const toggle = document.getElementsByClassName('toggle')[0]
const user = toggle.getElementsByClassName('user')[0]
const contact = toggle.getElementsByClassName('contact')[0]
const btn_img = btn.getElementsByTagName('img')[0]

btn.addEventListener('click', () => {
  toggle.classList.toggle('toggle--dark')
  user.classList.toggle('user--clicked')
  contact.classList.toggle('contact--clicked')
  btn_img.src = btn.classList.toggle('toggle__btn--clicked') ? './assets/images/icon-share-white.svg':'./assets/images/icon-share-dark.svg'
})
