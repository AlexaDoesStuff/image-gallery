import {useState} from 'react';

const ImageGallery = () => {
  const [keywords, setKeywords] = useState('');
  
  return(
    <div className="container gallery">
      <h1>Image Gallery</h1>
      <div className="search">
        <input type="text" value={keywords} onChange={e => setKeywords(e.target.value)} />
        <span className="display">Displaying x of x images</span>
      </div>
    </div>
  );
}

export default ImageGallery;