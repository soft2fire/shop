import { useContext, useState } from "react";
import { ItemsContext } from "./ItemsContext";

const Cart = () => {
    const [cartItems, setCartItems] = useContext(ItemsContext);
    const [promoCode, setPromoCode] = useState('')
    const [afterPromo, setAfterPromo] = useState('')

    const handlePromoCode = () => {
        if (promoCode === 'love') {
            setAfterPromo(totalCost() - 1000)
        } else {
            setAfterPromo(totalCost())
        }
    }


    const totalPrice = (basket, items) => {
        return basket + items.item.price * items.amount + 1;
    }

    const totalCost = () => {
        if (cartItems.length === 1) {
            let sumItems = cartItems[0].item.price * cartItems[0].amount
            // console.log(sumItems + "sumItemssss")
            return sumItems
        } else if (cartItems.length > 1) {
            let sumItems = cartItems.reduce(totalPrice, 0).toFixed(2)
            // console.log(sumItems + "sumItems")
            return sumItems
        } else { return '0' }
    }


    const handleChangePromo = (event) => {
        const { value } = event.target;
        setPromoCode(value);
    }

    const removeItem = (removeItem) => {
        setCartItems(
            cartItems.filter(item => item !== removeItem)
        );
    }

    return (
        <div className="container mx-auto text-white">
            {cartItems.length !== 0
                ? <div className="flex shadow-md my-3">

                    <div className="w-3/4 bg-gray-700 px-8 py-4 relative rounded-l-lg ">
                        <div className="flex justify-between border-b pb-4">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
                        </div>
                        <div className="flex mt-4 mb-2">
                            <h3 className="font-semibold text-xs uppercase w-4/5">Product Details</h3>
                            <h3 className="font-semibold text-xs uppercase w-1/5 text-right">Quantity</h3>
                            <h3 className="font-semibold text-xs uppercase w-1/5 text-right">Price</h3>
                            <h3 className="font-semibold text-xs uppercase w-1/5 text-right mr-2">Total</h3>
                        </div>

                        {cartItems.map((items) => (
                            <div key={items.item.id} className="flex items-center hover:bg-gray-600 -mx-8 px-6 py-5">
                                <div className="flex">
                                    <div className="w-64">
                                        <img src={items.item.image} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold  text-sm">{items.item.name}</span>
                                        <label max="100" className="text-gray-500 text-xs">{items.item.description}</label>
                                        <button onClick={() => { removeItem(items) }} href="#" className="bg-red-500 hover:bg-red-700 text-xs h-5 mt-2 w-16 text-white">Remove</button>
                                    </div>
                                </div>

                                <span className="text-center w-1/5 font-semibold text-sm">{items.amount}</span>
                                <span className="text-center w-1/5 font-semibold text-sm">${items.item.price}</span>
                                <span className="text-center w-1/5 font-semibold text-sm">${items.item.price * items.amount}</span>
                            </div>
                        ))}

                        <a href="/shop" className="flex font-semibold text-gray-100 text-sm pt-4 absolute bottom-0 left-0 ml-2">
                            <svg className="fill-current text-gray-100 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className="bg-gray-600 w-1/4 px-8 py-4 rounded-r-lg">
                        <h1 className="font-semibold text-2xl border-b pb-4">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm ">Items {cartItems.length}</span>
                            <span className="font-semibold text-sm">{totalCost()}$</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping + $ 0.0001 %</option>
                            </select>
                        </div>
                        <div className="py-4">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">discount</label>
                            <label htmlFor="promo" className="font-semibold text-red-400 mb-3 text-xs"> Enter the word love </label>

                            <input type="text" id="promo" onChange={handleChangePromo} placeholder="Enter your code"
                                className="p-2 text-sm text-gray-900 w-full" />
                        </div>
                        <button onClick={() => { handlePromoCode() }}
                            className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                            Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between pt-6 text-sm uppercase">
                                <span>Total cost :</span>
                                <span>${totalCost() * 1.0001}</span>
                            </div>
                            <div className="flex font-semibold justify-between text-sm my-1">
                                <span>Finally mount :</span>
                                <span>${afterPromo * 1.0001}</span>
                            </div>

                            <div className="flex gap-2 mt-4">
                                <button
                                    onClick={() => {
                                        window.print();
                                    }}
                                    className='float-right hover:bg-blue-700 font-semibold uppercase px-1 text-white bg-yellow-700 py-3 w-full'>
                                    Print
                                </button>
                                <button onClick={() => { alert('tanks for shopping') }}
                                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 px-1 text-sm text-white uppercase w-full">
                                    Checkout</button>
                            </div>
                        </div>
                    </div>

                </div>
                : <div className="text-center text-white pt-48">Basket Is empty</div>
            }
        </div>
    );
}
export default Cart;