export default function ProductCard(props) {
    const { name, price, image, description } = props.data;
    let { count, setCount } = props.state;

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleClick}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}