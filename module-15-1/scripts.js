const btn = document.querySelector('.btn');
const iconWithout = document.querySelector('.without-color');
const iconWith = document.querySelector('.with-color');

btn.addEventListener('click', () => {
   iconWithout.classList.toggle('hidden');
   iconWith.classList.toggle('hidden');
});