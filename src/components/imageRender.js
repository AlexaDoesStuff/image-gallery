import { useState } from 'react';

import './components.scss';

const ImageRender = ( props ) => {
  const [imgNo, setImgNo] = useState(9)
  return (
    <div className="rendered">
      images here
    </div>
  );
}

export default ImageRender;