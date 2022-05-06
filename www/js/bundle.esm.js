
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
const mainNav = () => {
  const hamburger = document.querySelector('.js--hamburger');
  const nav = document.querySelector('.o-header__colapse');
  const brand = document.querySelector('.a-brand');
  const itemWithSubmenu = document.querySelector('.js--has-submenu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
      nav.classList.toggle('open');

      if (nav.classList.contains('open')) {
        brand.style.opacity = '0';
        window.scrollTo(0, 0);
        body.style.overflow = "hidden";
      } else {
        brand.style.opacity = '1';
        body.style.overflow = "auto";
      }
    });

    if (itemWithSubmenu) {
      itemWithSubmenu.addEventListener('click', () => {
        let nextSibling = itemWithSubmenu.nextElementSibling;
        nextSibling.classList.toggle('open');
      });
    }
  }
};

mainNav();
console.log("heeello");
//# sourceMappingURL=bundle.esm.js.map
