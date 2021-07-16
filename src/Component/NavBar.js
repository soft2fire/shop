import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const NavBar = () => {
    const [cartItems] = useContext(CartContext);
    return (
        <div className="mt-2">
            <main className="bg-gradient-to-r from-green-700 to-blue-800 rounded-t-lg shadow-2xl border-2 border-gray-700 border-opacity-25 ">

                <div className="flex justify-between">
                    <h1 className='text-blue-200 font-bold pt-2 ml-8'>My Shopping Cart</h1>
                    <h1 className='text-blue-100 font-bold pt-2 mr-8'>{cartItems.length} Item in basket</h1>
                </div>

                <div className='justify-between pl-4 p-2 m-2 mb-0 rounded-t-lg bg-gray-700 text-white font-bold'>
                    <Link to="/" className='bg-gray-800 px-3 py-2 hover:bg-gray-800'>Home</Link>
                    <Link to="/shop" className='bg-gray-700 px-3 py-2 hover:bg-gray-800'>shop</Link>
                    <Link to="/Cart" className='bg-gray-700 px-3 py-2 hover:bg-gray-800'>CheckOut</Link>
                </div>
                
            </main>
        </div>
    );
}

export default NavBar;
