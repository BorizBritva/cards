
function Card(props) {
  return(
    <div className="card text-right" style={{width: "18rem"}}>
      {props.body /*Вызов через свойство body*/}
      {props.children /*Вызов через chikdren*/}
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Card
