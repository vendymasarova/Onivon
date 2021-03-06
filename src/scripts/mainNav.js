const mainNav = () => {

  const hamburger = document.querySelector('.js--hamburger');
  const nav = document.querySelector('.o-header__colapse');
  const brand = document.querySelector('.a-brand');
  const itemWithSubmenu = document.querySelector('.js--has-submenu');
  const submenu = document.querySelector('.js--submenu');
  const body = document.querySelector('body');

   const toggleNavbar = () => {
    hamburger.classList.toggle('is-active');
      nav.classList.toggle('open');

      if(nav.classList.contains('open')) {
        brand.style.opacity = '0';
        window.scrollTo(0, 0);
        body.style.overflow = 'hidden';
      }

      else {
        brand.style.opacity = '1';
        body.style.overflow = 'auto';
        submenu.classList.remove('open');
      }
   }

   const onPageResize = () => {
    if (window.innerWidth > 902) {
      nav.classList.remove('open');
      hamburger.classList.remove('is-active');
      body.style.overflow = 'visible';
      brand.style.opacity = '1';
    }
   }

  //  const openSubmenu = () => {

  //   let nextSibling = itemWithSubmenu.nextElementSibling;
  //   nextSibling.classList.toggle('open');
  //  }

  if(hamburger){

    hamburger.addEventListener('click', () => {
      toggleNavbar();

    })

    window.addEventListener('resize', function() {
      onPageResize();
    });

    if(itemWithSubmenu) {

      itemWithSubmenu.addEventListener(('click'), () => {
        // openSubmenu();

      })
    }
  }
}
export default mainNav;
