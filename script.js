document.addEventListener('DOMContentLoaded' , () =>{
  const images = [
 {src: 'images/BACKGROUND1.jpg , hdSrc:'images/hd/BACKGROUND1.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND2.jpg , hdSrc:'images/hd/BACKGOUND2.jpg',caption: 'First Image'},
 {src: 'images/BACKGROUND3.jpg , hdSrc:'images/hd/BACKGROUND3.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND4.jpg , hdSrc:'images/hd/BACKGOUND4.jpg',caption: 'First Image'},
 {src: 'images/BACKGROUND5.jpg , hdSrc:'images/hd/BACKGROUND5.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND6.jpg , hdSrc:'images/hd/BACKGOUND6.jpg',caption: 'First Image'},
  {src: 'images/BACKGROUND7.jpg , hdSrc:'images/hd/BACKGROUND7.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND8.jpg , hdSrc:'images/hd/BACKGOUND8.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND9.jpg , hdSrc:'images/hd/BACKGOUND9.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND10.jpg , hdSrc:'images/hd/BACKGOUND10.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND11.jpg , hdSrc:'images/hd/BACKGOUND11.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND12.jpg , hdSrc:'images/hd/BACKGOUND12.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND13.jpg , hdSrc:'images/hd/BACKGOUND13.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND14.jpg , hdSrc:'images/hd/BACKGOUND14.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND15.jpg , hdSrc:'images/hd/BACKGOUND15.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND16.jpg , hdSrc:'images/hd/BACKGOUND16.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND17.jpg , hdSrc:'images/hd/BACKGOUND17.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND18.jpg , hdSrc:'images/hd/BACKGOUND18.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND19.jpg , hdSrc:'images/hd/BACKGOUND19.jpg',caption: 'First Image'},
 {src: 'images/BACKGOUND20.jpg , hdSrc:'images/hd/BACKGOUND20.jpg',caption: 'First Image'},
   ];
  const gallery = documentById('gallery');
  images.ForEach({images,index}=>{
    const imgElement = document.createElement('img');
    imgElement.src =image.src;
      imgElement.dataset.hdSrc = image.hdSrc
       imgElement.dataset.caption = image.caption;
       imgElement.dataset.index = index;
    gallery,appendchild(imgElement);
  });
  gallery.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
      const hdSrc= e.target..dataset.hdSrc;
      const caption= e.target.dataset.caption ;
      const hdImageContainer= document.createElement('div');
      hdImageContainer.id ='hd-image-container';
      hdImageContainer.style.display ='flex;

      comst hdImage = document.createElement('img');
      hdImage.src = hdSrc;
      hdImageContainer.appendchild(captionElement);
      document.body.appendchild(hdImageContainer);
      hdImageContainer.addEventListener('click',()=>){
        hdImageContainer.style.display='none';
        document.body.,removechilf(hdImageContainer);
     });
    }
    }),
    });

