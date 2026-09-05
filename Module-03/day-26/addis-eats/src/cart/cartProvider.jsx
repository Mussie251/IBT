import { createContext, useContext, useMemo, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  const total = items.reduce((sum, item) => sum + Number(item.price), 0);

  const value = useMemo(
    () => ({ items, dispatch, total }),
    [items, total]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}