const btn = document.querySelector('.j-btn-test')
let clientWidth = document.documentElement.clientWidth
let clientHeight = document.documentElement.clientHeight


btn.addEventListener('click', () => {
  alert('Ширина страницы: ' + clientWidth)
  alert('Высота страницы: ' + clientHeight)
})