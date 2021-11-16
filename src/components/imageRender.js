import { useState, useEffect } from 'react';

import Thumbnail from './thumbnail.js';

import './components.scss';

function ImageRender(props) {
  const [imgNo, setImgNo] = useState(8);
  const [curPage, setCurPage] = useState(0);
  const [pages, setPages] = useState(Math.ceil(props.photos.photo.length / imgNo));
  const [images, setImages] = useState(props.photos.photo);

  const imgArray = props.photos.photo;

  const getImages = (curPage, imgNo) => {
    var starter = curPage * imgNo;
    var x = [];
    for(var i = starter; i < (imgNo + starter); i++) {
      if(imgArray[i]) {
        x.push(imgArray[i]);
      }
    }
    return x;
  }

  useEffect(() => {
    setImages(getImages(curPage, imgNo));
  }, [curPage]);

  console.log(images);

  return (  
    <>
      <div className="rendered d-flex">
        {images.map((img, i) =>  
          <Thumbnail index={i} image={img} />
        )}
      </div>
      <div className="arrows m-4">
        <button onClick={() => setCurPage(0)}>&#171;</button>
        {curPage == 0 ? <button disabled>&#8249;</button> : <button onClick={() => setCurPage(curPage - 1)}>&#8249;</button>}
        <span> {curPage + 1} of {pages} </span>
        {curPage == pages - 1 ? <button disabled>&#8250;</button> : <button onClick={() => setCurPage(curPage + 1)}>&#8250;</button>}
        <button onClick={() => setCurPage(12)}>&#187;</button>
      </div>
    </>
  );
}

export default ImageRender;