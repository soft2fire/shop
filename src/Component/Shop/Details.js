import { useContext, useState } from 'react'
import { CartContext } from '../CartContext'
import shopItems from './Data'


const Details = () => {
    const [cartItems, setCartItems] = useContext(CartContext);
    const [productItems] = useState(shopItems);
    const index = localStorage.getItem('currentProductPage')
    const currentProductInfo = productItems.find((item) => item.id === Number(index));

    const handleAddInCart = (item, quantity) => {
        if (cartItems.some((element) => element.item.id === item.id)) {
            cartItems.forEach(element => {
                if (element.item.id === item.id) {
                    const newCartItem = [...cartItems];
                    const index = newCartItem.indexOf(element);
                    newCartItem[index].amount = Number(element.amount) + Number(quantity);
                    setCartItems(newCartItem);
                }
            });
            return;
        }
        const cartItem = {
            item: item,
            amount: quantity
        }
        setCartItems([...cartItems, cartItem]);
    }
    const { name, image, description, price } = currentProductInfo;
    
    return (
        <div className="text-white bg-gray-700 bg-opacity-75 rounded-lg m-2 shadow-inner">
            <h2 className="font-bold text-xl text-center mt-2 bg-gray-700 rounded mx-8">{name}</h2>

            <div className="flex">
                <div className="w-2/3 p-10">
                    <p className="mt-2 h-auto text-gray-400 text-lg font-bold">{description}</p>
                    <p className="mt-2 h-auto text-gray-400 text-lg font-bold">{description}</p>
                    <h1 className="text-gray-100 font-bold text-xl mt-4">Price : ${price}
                        <button onClick={() => handleAddInCart(currentProductInfo, 1)}
                            className="px-3 py-2 mx-4 bg-gray-800 text-xs font-bold uppercase rounded hover:bg-gray-600">
                            Add to Card
                        </button>
                    </h1>

                </div>
                <img className="h-96 w-96" src={image} alt={name} />
            </div>
        </div>
    )
}
export default Details