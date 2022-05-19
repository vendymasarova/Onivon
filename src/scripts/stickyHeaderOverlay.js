const stickyHeaderOverlay = () => {
  const navigation = document.querySelector('.js--stickyNav');
  if(navigation) {

    const scroll = {
      header: document.querySelector('.js-stickyNav'),
      headerOverlay: document.querySelector('.js-overlay'),
      onScroll: function() {
        const element = this,
              offset = window.pageYOffset,
              height = ((offset <= 100) ? offset : 100),
              opacityHeader = ((offset <= 100) ? ((window.pageYOffset) * 0.01).toFixed(2) : '1');

        element.headerOverlay.style.height = height + 'px';
        element.headerOverlay.style.opacity = opacityHeader;
      }
    };

    if (window.pageYOffset > 100) {
      scroll.onScroll();
    }

    window.onscroll = function () {
      scroll.onScroll();
    };
  }
}

export default stickyHeaderOverlay;
