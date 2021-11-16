import { useRef, useEffect, useState } from 'react';

function ImageModal(props) {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const modalRef = useRef(null);

  const reset = () => {
    setTitle(props.info.title);
    setDesc(props.info.description._content);
    props.close();
  }

  useEffect(() => {
    setTitle(props.info.title);
    setDesc(props.info.description._content);
  }, [props])

  return (
  <>  
    <h1>{props.info.title}</h1>
    <div className="line"></div>
    <div className="editables">
      <div className="row editor">
        <label>Title: </label>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="row editor">
        <label>Description: </label>
        <input type="text" id="description" value={desc} onChange={e => setDesc(e.target.value)} />
      </div>
    </div>
    <div className="statics">

    </div>
    <div className="line"></div>
    <div className="edit-buttons m-2">
      <button onClick={() => reset()}>Cancel</button>
      <button>Save</button>
    </div>
  </>
  )
}

export default ImageModal;