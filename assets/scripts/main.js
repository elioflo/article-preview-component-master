const btn = document.getElementById('btn')
const toggle = document.getElementsByClassName('toggle')[0]
const user = toggle.getElementsByClassName('user')[0]
const contact = toggle.getElementsByClassName('contact')[0]

btn.addEventListener('click', () => {
  toggle.classList.toggle('toggle--dark')
  user.classList.toggle('user--clicked')
  contact.classList.toggle('contact--clicked')
  btn.classList.toggle('toggle__btn--clicked')
})
