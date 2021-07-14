import { useContext, useState } from 'react';
import { ItemsContext } from '../ItemsContext';
import ProductItem from '../Shop/ProductItem'//card
import shopItems from '../Shop/ProductLists'
import bmw_logo from './images/bmw_logo.png'
import ford_logo from './images/ford_logo.png'
import benz_logo from './images/benz_logo.png'

const Shop = () => {

    const [showItems, setShowItems] = useState('all');
    const [cartItems, setCartItems] = useContext(ItemsContext);
    const allItems = shopItems.bmw.concat(shopItems.benz, shopItems.ford);

    const handleAddInCart = (item, quantity) => {
        if (cartItems.some(element => element.item.id === item.id)) {
            cartItems.forEach(element => {
                if (element.item.id === item.id) {
                    const newCartItems = [...cartItems];
                    const index = newCartItems.indexOf(element);
                    newCartItems[index].amount = Number(element.amount) + Number(quantity);
                    setCartItems(newCartItems);
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

    return (
        <div className="mb-4">
            
            <div className='flex justify-center mx-3 rounded-b-md bg-gray-700 bg-opacity-75  text-white'>

                <button onClick={() => setShowItems('all')} className='px-3 hover:bg-gray-800'>ALL</button>
                <button onClick={() => setShowItems('bmw')} className='px-3 py-2 hover:bg-gray-800'>
                    <img className="w-8 h-8" src={bmw_logo} alt={'x3'} />
                </button>
                <button onClick={() => setShowItems('benz')} className='px-3 hover:bg-gray-800'>
                    <img className="w-8 h-8" src={benz_logo} alt={'x3'} />
                </button>
                <button onClick={() => setShowItems('ford')} className='px-3 hover:bg-gray-800'>
                    <img className="w-16 h-8" src={ford_logo} alt={'x3'} />
                </button>
            </div>

            <div className={showItems !== 'all' ? "grid grid-flow-col grid-cols-3 mx-2 grid-rows-1" : 'grid mx-2 grid-flow-col grid-cols-3 grid-rows-3'}>
                {showItems !== 'all'
                    ? shopItems[showItems].map(item => (

                        <ProductItem
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            description={item.description}
                            onClick={(quantity) => handleAddInCart(item, quantity)}
                        />

                    ))
                    : allItems.map(item => (

                        <ProductItem
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            description={item.description}
                            onClick={(quantity) => handleAddInCart(item, quantity)}
                        />

                    ))
                }
            </div>

        </div>
    );
}
export default Shop;