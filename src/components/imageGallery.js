/* imageGallery.js
* The main component that renders in App.js. Composed of three main components 
* that separate the logic expected of each. 
* 
* Props: None
* Functions:
*
*   getDisplayedNo() 
*   params: numb (string)
*   return: set's the number of displayed images based on the imageRender component; appears on upr right
*
*   filterArray() 
*   params: keywords (string)
*   return: with the static json, uses the strings types in the search bar to filter data.json against 
*           description content and title ONLY for now
*
*   useEffect() x 2
*   params: [] and noDisplay (string)
*   return: the first useEffect retrieves the data.json photo array like a fetch
*           the second useEffect is an additional listener that detects if after searching, no images 
*           are returned, thus returning a string that says 'No images found!'   
*
*/


import { useState, useEffect } from 'react';

import ImageRender from './imageRender.js';

import "./components.scss";

function ImageGallery() {
  const [keywords, setKeywords] = useState('');
  const [photos, setPhotos] = useState(null);
  const [empty, setEmpty] = useState(false);

  const [page, setPage] = useState(0);

  const [noDisplay, setNoDisplay] = useState(null);

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

  useEffect(() => {
    if(noDisplay == 0) {
      setEmpty(true);
    } else if (noDisplay > 0) {
      setEmpty(false);
    }
  }, [noDisplay]);

  return(
    <div className="container gallery d-flex">
      <h1>Image Gallery</h1>
      
      <div className="search">
        <label>Search: </label>
        <input type="search" 
          id="search" 
          value={keywords} 
          onChange={e => setKeywords(e.target.value)} 
        />

        <button className="btn btn-link " onClick={() => filterArray(keywords)}>
          &#x1F50E;
        </button>

        <div className="display">Displaying <span id="nodisplay">{noDisplay}</span> of <span className="total">{photos ? photos.length : ''}</span></div>
      </div>

      <div className="line"></div>

      {/* This would be an additional feature; select the total amount of imgs shown on ea pg
      <div className="page-selectors">
        4 | 8 | 10
      </div> 
      */}

      <div className="images">
        <div className="no-display" style={{display: (empty ? 'block' : 'none')}}>
          No images found!
        </div>
        {photos ? <ImageRender displayed={getDisplayedNo} photos={photos} curPage={page} pages={photos.length}/> : ''}
      </div>

    </div>
  );
}

export default ImageGallery;