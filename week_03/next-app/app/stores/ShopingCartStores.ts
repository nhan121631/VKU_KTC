import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface Item {
    product: Product;
    quantity: number;
}

interface ShoppingCartState  {
  items: Item[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  decreaseItem: (productId: number) => void;
};

export const useShoppingCartStore = create<ShoppingCartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        addItem: (product, quantity = 1) =>
          set((state) => {
            console.log('Adding item:', product, 'Quantity:', quantity);
            const existingItem = state.items.find(item => item.product.id === product.id);
            if (existingItem) {
              return {
                items: state.items.map(item =>
                  item.product.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
                ),
              };
            }
            return {
              items: [...state.items, { product, quantity }],
            };
          }),
        removeItem: (productId) =>
          set((state) => ({
            items: state.items.filter(item => item.product.id !== productId),
          })),
        decreaseItem: (productId) =>
          set((state) => {
            const existingItem = state.items.find(item => item.product.id === productId);
            if (existingItem) {
              if (existingItem.quantity > 1) {
                return {
                  items: state.items.map(item =>
                    item.product.id === productId
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
                  ),
                };
              } else {
                return {
                  items: state.items.filter(item => item.product.id !== productId),
                };
              }
            }
            return {};
          }),
      }),
      {
        name: 'shopping-cart-storage', 
      }
    )
  )
);