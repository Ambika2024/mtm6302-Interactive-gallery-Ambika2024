document.addEventListener('DOMContentLoaded', () => {
  const images = [
      {src: 'images/BACKGROUND-1.jpg', hdSrc: 'images/hd/BACKGROUND-1.jpg', caption: 'First Image'},
      {src: 'images/BACKGOUND-2.jpg', hdSrc: 'images/hd/BACKGOUND-2.jpg', caption: 'Second Image'},
      {src: 'images/BACKGROUND-3.jpg', hdSrc: 'images/hd/BACKGROUND-3.jpg', caption: 'Third Image'},
      {src: 'images/BACKGOUND-4.jpg', hdSrc: 'images/hd/BACKGOUND-4.jpg', caption: 'Fourth Image'},
      {src: 'images/BACKGROUND-5.jpg', hdSrc: 'images/hd/BACKGROUND-5.jpg', caption: 'Fifth Image'},
      {src: 'images/BACKGOUND-6.jpg', hdSrc: 'images/hd/BACKGOUND-6.jpg', caption: 'Sixth Image'},
      {src: 'images/BACKGROUND-7.jpg', hdSrc: 'images/hd/BACKGROUND-7.jpg', caption: 'Seventh Image'},
      {src: 'images/BACKGOUND-8.jpg', hdSrc: 'images/hd/BACKGOUND-8.jpg', caption: 'Eighth Image'},
      {src: 'images/BACKGOUND-9.jpg', hdSrc: 'images/hd/BACKGOUND-9.jpg', caption: 'Ninth Image'},
      {src: 'images/BACKGOUND-10.jpg', hdSrc: 'images/hd/BACKGOUND-10.jpg', caption: 'Tenth Image'},
      {src: 'images/BACKGOUND-11.jpg', hdSrc: 'images/hd/BACKGOUND-11.jpg', caption: 'Eleventh Image'},
      {src: 'images/BACKGOUND-12.jpg', hdSrc: 'images/hd/BACKGOUND-12.jpg', caption: 'Twelfth Image'},
      {src: 'images/BACKGOUND-13.jpg', hdSrc: 'images/hd/BACKGOUND-13.jpg', caption: 'Thirteenth Image'},
      {src: 'images/BACKGOUND-14.jpg', hdSrc: 'images/hd/BACKGOUND-14.jpg', caption: 'Fourteenth Image'},
      {src: 'images/BACKGOUND-15.jpg', hdSrc: 'images/hd/BACKGOUND-15.jpg', caption: 'Fifteenth Image'},
      {src: 'images/BACKGOUND-16.jpg', hdSrc: 'images/hd/BACKGOUND-16.jpg', caption: 'Sixteenth Image'},
      {src: 'images/BACKGOUND-17.jpg', hdSrc: 'images/hd/BACKGOUND-17.jpg', caption: 'Seventeenth Image'},
      {src: 'images/BACKGOUND-18.jpg', hdSrc: 'images/hd/BACKGOUND-18.jpg', caption: 'Eighteenth Image'},
      {src: 'images/BACKGOUND-19.jpg', hdSrc: 'images/hd/BACKGOUND-19.jpg', caption: 'Nineteenth Image'},
      {src: 'images/BACKGOUND-20.jpg', hdSrc: 'images/hd/BACKGOUND-20.jpg', caption: 'Twentieth Image'}
  ];

  const gallery = document.getElementById('gallery');

  images.forEach((image, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.dataset.hdSrc = image.hdSrc;
      imgElement.dataset.caption = image.caption;
      imgElement.dataset.index = index;
      gallery.appendChild(imgElement);
  });

  gallery.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
          const hdSrc = e.target.dataset.hdSrc;
          const caption = e.target.dataset.caption;
          const hdImageContainer = document.createElement('div');
          hdImageContainer.id = 'hd-image-container';
          hdImageContainer.style.display = 'flex';

          const hdImage = document.createElement('img');
          hdImage.src = hdSrc;
          hdImageContainer.appendChild(hdImage);

          const captionElement = document.createElement('div');
          captionElement.id = 'caption';
          captionElement.textContent = caption;
          hdImageContainer.appendChild(captionElement);

          document.body.appendChild(hdImageContainer);

          hdImageContainer.addEventListener('click', () => {
              hdImageContainer.style.display = 'none';
              document.body.removeChild(hdImageContainer);
          });
      }
  });
});
