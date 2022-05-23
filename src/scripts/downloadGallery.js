import 'lightgallery.js/dist/js/lightgallery';

const downloadGallery = () => {
  const gallery = document.querySelectorAll('.js--lightgallery');
  gallery.forEach(item => {
    lightGallery(item), {
      speed: 500,
    };
  });
}

export default downloadGallery;
