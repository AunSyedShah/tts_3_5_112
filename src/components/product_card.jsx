export default function ProductCard(props) {
    const { fact, length } = props.data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            {/* <figure><img src={image} alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title text-justify">{fact}</h2>
                <p className="text-2xl text-justify">Length of Text: {length}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary" onClick={handleClick}>Buy Now</button> */}
                </div>
            </div>
        </div>
    )
}
