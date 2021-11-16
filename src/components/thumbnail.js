import './components.scss';

function Thumbnail(props) {

  return (
    <div className="thumbnail col-3">
      <div className={`url ${props.i}`}
        style={{backgroundImage: `url(${props.image.url_m})`}}
      >
      </div> 
      <div>
        {props.image.title}
      </div>
      <div className="modal">

      </div>
    </div>
  )
}

export default Thumbnail;