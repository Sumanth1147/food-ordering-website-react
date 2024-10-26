import React from 'react'; /*here we should import react because we use React.createContext*/

const CartContext = React.createContext({    /*we use React.createContext*/
  items: [],
  totalAmount: 0,                /*all these data is for better autocompletion , that's it */
  addItem: (item) => {},      
  removeItem: (id) => {}
});

export default CartContext;