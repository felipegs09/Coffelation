const closeMenu = () => {
  const body = document.querySelector('body')
  body.classList.remove('menuExpanded')
}

const openMenu = () => {
  const body = document.querySelector('body')
  body.classList.add('menuExpanded')
}
