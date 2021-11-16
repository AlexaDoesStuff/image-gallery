import { useRef, useEffect, useState } from 'react';

function ImageModal(props) {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

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
        <textarea id="description" value={desc} onChange={e => setDesc(e.target.value)} />
      </div>
    </div>
    <div className="statics ml-3">
      <div className="row m-0">
        <label>Public Domain: </label>
        { props.info.ispublic ? <input type="checkbox" id="public" name="public" checked disabled/> :  <input type="checkbox" id="public" name="public" checked disabled /> } 
      </div>
      <label>ID: </label> {props.info.id}
      <label>Owner Name: </label> {props.info.ownername}
      <label>Dimensions: </label> {props.info.width_m} x {props.info.height_m}
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