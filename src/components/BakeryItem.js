// TODO: create a component that displays a single bakery item


export default function BakeryItem(props) {
    return (

        <div id="bakery-item-div">
            <h3>
                {props.name}
            </h3>
            <img src={props.image} width = "500px" />
            <h6>
                {props.description}
            </h6>
            <h5>
                {props.price}
            </h5>
            <button onClick={() => 
                {
                    props.setTotal(props.total+props.price)
                    props.setItems([...props.items, props.name] )

                }
            }>Add to Cart</button>
        </div>

    );
        
    
}