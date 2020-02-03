import navbar from './navbar';
import body from './body';
import footer from './footer';


const nav = document.createElement('nav')
nav.classList.add('navbar')
nav.innerHTML = navbar()

const bodyDiv = document.createElement('div')
bodyDiv.classList.add('body')
bodyDiv.innerHTML = body().home();

const footerEl = document.createElement('footer')
footerEl.innerHTML = footer();

document.querySelector('#content').appendChild(nav)
document.querySelector('#content').appendChild(bodyDiv)
document.querySelector('#content').appendChild(footerEl)

const tabs = document.querySelectorAll('.tab')

function updateBody(e) {
 const id = e.currentTarget.dataset.id
 if(id === 'home') {
  bodyDiv.innerHTML = body().home();
  document.querySelector('[data-id="home"]>a').classList.add('active');
  document.querySelector('[data-id="menu"]>a').classList.remove('active');
  document.querySelector('[data-id="about"]>a').classList.remove('active');
  document.querySelector('[data-id="contact"]>a').classList.remove('active');
 }
 if(id === 'menu') {
  bodyDiv.innerHTML = body().menu();
  document.querySelector('[data-id="home"]>a').classList.remove('active');
  document.querySelector('[data-id="menu"]>a').classList.add('active');
  document.querySelector('[data-id="about"]>a').classList.remove('active');
  document.querySelector('[data-id="contact"]>a').classList.remove('active');
 }
 if(id === 'about') {
  bodyDiv.innerHTML = body().about();
  document.querySelector('[data-id="home"]>a').classList.remove('active');
  document.querySelector('[data-id="menu"]>a').classList.remove('active');
  document.querySelector('[data-id="about"]>a').classList.add('active');
  document.querySelector('[data-id="contact"]>a').classList.remove('active');
 }
 if(id === 'contact') {
  bodyDiv.innerHTML = body().contact();
  document.querySelector('[data-id="home"]>a').classList.remove('active');
  document.querySelector('[data-id="menu"]>a').classList.remove('active');
  document.querySelector('[data-id="about"]>a').classList.remove('active');
  document.querySelector('[data-id="contact"]>a').classList.add('active');
 }
}

tabs.forEach(tab => tab.addEventListener('click', updateBody))

