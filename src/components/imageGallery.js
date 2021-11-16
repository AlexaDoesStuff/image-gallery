import { useState, useEffect } from 'react';

import ImageRender from './imageRender.js';

import "./components.scss";

function ImageGallery() {
  const [keywords, setKeywords] = useState('');
  const [photos, setPhotos] = useState(null);

  const [page, setPage] = useState(0);

  const [noDisplay, setNoDisplay] = useState(0);

  const getDisplayedNo = ( numb ) => {
    setNoDisplay(numb)
  }

  const filterArray = (keywords) => {
    setPage(0);
    fetch('data.json')
    .then((res) => { 
      if (!res.ok) throw new Error();
        else return res.json();
    })
    .then(data => {
      setPhotos(data.photos.photo.filter((el) => {
        return el.description._content.toLowerCase().includes(keywords.toLowerCase()) || el.title.toLowerCase().includes(keywords.toLowerCase());
      }));
    });
  }

  useEffect(() => {
    fetch('data.json')
    .then((res) => { 
      if (!res.ok) throw new Error();
        else return res.json();
    })
    .then(data => setPhotos(data.photos.photo))
  }, []);

  return(
    <div className="container gallery d-flex">
      <h1>Image Gallery</h1>
      <div className="search">
        <label>Search: </label>
        <input type="text" id="search" value={keywords} onChange={e => setKeywords(e.target.value)} />
        <button className="btn btn-link " onClick={() => filterArray(keywords)}>
          &#x1F50E;
        </button>
        <div className="display">Displaying {noDisplay} of {photos ? photos.length : ''}</div>
      </div>
      <div className="line"></div>
      <div className="images">
        {photos ? <ImageRender displayed={getDisplayedNo} photos={photos} curPage={page} pages={photos.length}/> : ''}
      </div>
    </div>
  );
}

export default ImageGallery;