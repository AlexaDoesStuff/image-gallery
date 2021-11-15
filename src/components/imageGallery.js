import { useState, useEffect } from 'react';

import ImageRender from './imageRender.js';

import "./components.scss";

const ImageGallery = () => {
  const [keywords, setKeywords] = useState('');
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch('data.json')
    .then((res) => { 
      if (!res.ok) throw new Error();
        else return res.json();
    })
    .then( data => setPhotos(data.photos));
  }, [keywords]);
  
  return(
    <div className="container gallery d-flex">
      <h1>Image Gallery</h1>
      <div className="search">
        <label>Search: </label>
        <input type="text" id="search" value={keywords} onChange={e => setKeywords(e.target.value)} />
        <div className="display">Displaying x of total images</div>
      </div>
      <div className="line"></div>
      <div className="images">
        <ImageRender photos={photos}/>
      </div>
    </div>
  );
}

export default ImageGallery;