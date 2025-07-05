import React, { createContext } from "react";
import { products } from "../data/products";
import { NavBar } from "./NavBar";
import styles from "./Product.module.css";
import { ProductCard } from "./ProductCard";
import type { CartItem } from "../types/CartItem";

export const ShoppingCartContext = createContext<any>({
  item: [] as CartItem[],
  addItem: (item: CartItem) => {},
  minusItem: (item: CartItem) => {},
  removeItem: (itemId: number) => {},
});

export const ProductGrid = () => {
  const [cart, setCart] = React.useState<{ items: CartItem[] }>({ items: [] });
  const addItem = (item: CartItem) => {
    const exItemIndex = cart.items.findIndex(
      (cartItem) => cartItem.product.id === item.product.id
    );
    if (exItemIndex >= 0) {
      setCart((prev) => {
        const updatedItems = [...prev.items];
        updatedItems[exItemIndex] = {
          ...updatedItems[exItemIndex],
          quantity: updatedItems[exItemIndex].quantity + item.quantity,
        };
        return { ...prev, items: updatedItems };
      });
    } else {
      setCart((prev) => ({
        ...prev,
        items: [...prev.items, item],
      }));
    }
  };

  const removeItem = (itemId: number) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.product.id !== itemId),
    }));
  };
  const minusItem = (item: CartItem) => {
    const exItemIndex = cart.items.findIndex(
      (cartItem) => cartItem.product.id === item.product.id
    );

    if (exItemIndex >= 0) {
      setCart((prev) => {
        const updatedItems = [...prev.items];
        const currentQuantity = updatedItems[exItemIndex].quantity;

        if (currentQuantity > 1) {
          updatedItems[exItemIndex] = {
            ...updatedItems[exItemIndex],
            quantity: currentQuantity - item.quantity,
          };
        } else {
          updatedItems.splice(exItemIndex, 1);
        }

        return { ...prev, items: updatedItems };
      });
    }
  };

  let total = 0;
  cart.items.forEach((item) => {
    total += item.product.price * item.quantity;
    console.log(total);
  });
  return (
    <ShoppingCartContext.Provider
      value={{ cart, setCart, addItem, minusItem, removeItem, total }}
    >
      <div className={styles.container}>
        <NavBar />
        <div className={styles.containerProductCard}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </ShoppingCartContext.Provider>
  );
};
