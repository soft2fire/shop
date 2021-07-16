import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    // const handleAddInCart = (item, quantity) => {

    //     if (items.some(element => element.item.id === item.id)) {

    //         items.forEach(element => {

    //             if (element.item.id === item.id) {
    //                 const newCartItems = [...items];
    //                 const index = newCartItems.indexOf(element);
    //                 newCartItems[index].amount = Number(element.amount) + Number(quantity);
    //                 setItems(newCartItems);
    //             }

    //         });

    //         return;
    //     }

    //     const cartItem = {
    //         item: item,
    //         amount: quantity
    //     }
    //     setItems([...items, cartItem]);
    // }

    // const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={[items, setItems]}  >
            {props.children}
        </CartContext.Provider>
    );
}