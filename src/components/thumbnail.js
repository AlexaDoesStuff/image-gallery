import { useState } from 'react';

import './components.scss';

import ImageModal from './imageModal.js';

function Thumbnail(props) {
  const [display, setDisplay] = useState(false);

  const closeModal = () => {
    setDisplay(false);
  }

  return (
    <div className="thumbnail col-3 p-0">
      <button className="unstyle"
        onClick={() => setDisplay(!display)}  
      >
        <div className={`url ${props.image.id}`}
          style={{backgroundImage: `url(${props.image.url_m})`}}
        />
      </button>
      <div>
        {props.image.title}
      </div>
      <div className={`modal ${props.image.id}`} 
        style={{display: (display ? 'block' : 'none')}}
      >
        <div className="modal-content">
          <button className="close"
            onClick={() => setDisplay(false)}>
            &times;
          </button>
          <ImageModal info={props.image} close={closeModal}/>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail;