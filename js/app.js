const dropdown = document.getElementsByClassName('dropdown'),
      dropdownName = document.getElementsByTagName('li')

dropdownName[0].addEventListener('mouseenter', () => {
    dropdown[0].classList.toggle('show')
})


dropdownName[1].addEventListener('mouseenter', () => {
    dropdown[1].classList.toggle('show')
})