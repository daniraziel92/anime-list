import './ItemAnime.css'

const ItemAnime = (props) => {
return(
    <div className = "container">
        <img src={props.image}/>
        <div className ="container-text">
            <h1>{props.name}</h1>
            <h2>{props.year}</h2>
            <h2>{props.status}</h2>
            <p>{props.synopsis}</p>
            <h3>{props.rating}</h3>
        </div>
    </div>
)

};
export default ItemAnime