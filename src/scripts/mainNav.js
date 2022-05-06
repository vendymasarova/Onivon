

const mainNav = () => {

  const hamburger = document.querySelector('.js--hamburger');
  const nav = document.querySelector('.o-header__colapse');
  const brand = document.querySelector('.a-brand');
  const itemWithSubmenu = document.querySelector('.js--has-submenu');

  if(hamburger){

    hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('is-active');
    nav.classList.toggle('open');

    if(nav.classList.contains('open')) {
      brand.style.opacity = '0';
      window.scrollTo(0, 0);
      body.style.overflow = "hidden";
    }

    else {
      brand.style.opacity = '1';
      body.style.overflow = "auto";
    }
  })

  if(itemWithSubmenu) {

    itemWithSubmenu.addEventListener(('click'), () => {

      let nextSibling = itemWithSubmenu.nextElementSibling;

      nextSibling.classList.toggle('open');
    })
  }
}
}
export default mainNav;
