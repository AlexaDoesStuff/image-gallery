import { useState, useEffect } from 'react';

import Thumbnail from './thumbnail.js';

import './components.scss';

function ImageRender(props) {
  const imgNo = 8;
  const pages = Math.ceil(props.pages / 8);

  const [curPage, setCurPage] = useState(props.curPage);
  const [images, setImages] = useState();

  const imgArray = props.photos;

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

  const passPage = () => {
    props.passPage(curPage)
  }

  useEffect(() => {
    if(curPage > pages) {
      setCurPage(0);
    }
    setImages(getImages(curPage, imgNo));
    passPage();
  }, [curPage, props.pages]);

  return (  
    <>
      <div className="rendered d-flex">
        {images ? images.map((img) =>  
          <Thumbnail image={img} />
        ) : ''}
      </div>
      <div className="arrows m-4">
        <button onClick={() => setCurPage(0)}>&#171;</button>
        {curPage == 0 ? <button disabled>&#8249;</button> : <button onClick={() => setCurPage(curPage - 1)}>&#8249;</button>}
        <span> {curPage + 1} of {pages} </span>
        {curPage == pages - 1 ? <button disabled>&#8250;</button> : <button onClick={() => setCurPage(curPage + 1)}>&#8250;</button>}
        <button onClick={() => setCurPage(pages - 1)}>&#187;</button>
      </div>
    </>
  );
}

export default ImageRender;