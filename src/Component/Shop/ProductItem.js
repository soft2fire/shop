import { useState } from "react"
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const [quantity, setQuantity] = useState(1);
    const { id, onClick, name, image, price, description } = props;
    function setLocalPath(id) {
        localStorage.setItem('currentProductPage', id);
    }
    return (
        <div className="text-white bg-gray-700 bg-opacity-75 rounded-lg m-2 shadow-inner">
            <h2 className="font-bold text-xl text-center mt-2 bg-gray-700 rounded mx-8">{name}</h2>

            <div className="flex">
                <div className="w-2/3 p-2 text-lg">
                    <p className="mt-2 h-auto text-gray-400 text-sm">{description}</p>
                </div>

                <img className="h-44 w-44" src={image} alt={name} />
            </div>

            <div className="flex justify-between mt-1 mx-2 mb-2">
                <button onClick={() => { onClick(quantity) }}
                    className="px-3 py-2 bg-gray-800 text-xs font-bold uppercase rounded hover:bg-gray-600">
                    Add to Card</button>
                <Link to={`/shop/${id}`} onClick={() => setLocalPath(id)}
                    className="px-3 py-2 bg-gray-800 text-xs font-bold uppercase rounded hover:bg-gray-600">
                    Details
                </Link>
                <h1 className="text-gray-100 font-bold text-xl">${price}</h1>
                <label className=" bg-gray-800 rounded-md pl-2">
                    Qty :
                    <select className="m-1 rounded text-gray-800"
                        onChange={(event) => setQuantity(event.target.value)}
                        name="quantity"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </label>

            </div>
        </div>
        // </div>
    )
}
export default ProductItem