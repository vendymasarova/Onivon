import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgHash from 'lightgallery/plugins/hash'

const downloadGallery = () => {



  const gallery = document.querySelectorAll('.js--lightgallery');

  gallery.forEach(item => {

    lightGallery(item), {
      plugins: [lgZoom, lgThumbnail, lgHash],
      licenseKey: 'your_license_key',
      speed: 500,
    };
  });




  // lightGallery(document.getElementById('lightgallery1'), {
  //   plugins: [lgHash],

  //   galleryId: 1,
  //   hash:true,
  // });
  // lightGallery(document.getElementById('lightgallery2'), {
  //   plugins: [lgHash],

  //   galleryId: 2,
  //   hash:true,
  // });
}

export default downloadGallery;
