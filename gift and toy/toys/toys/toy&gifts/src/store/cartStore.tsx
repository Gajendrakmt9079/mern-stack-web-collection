import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  total: number;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  
  addItem: (newItem) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      if (existingItem) {
        // If item exists, increment quantity
        return {
          items: state.items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + newItem.price,
        };
      }
      
      // If item doesn't exist, add it with quantity 1
      return {
        items: [...state.items, { ...newItem, quantity: 1 }],
        total: state.total + newItem.price,
      };
    });
  },

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
      total: state.total - (state.items.find((item) => item.id === id)?.price ?? 0),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const item = state.items.find((item) => item.id === id);
      if (!item) return state;

      const oldTotal = item.price * item.quantity;
      const newTotal = item.price * quantity;

      return {
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
        total: state.total - oldTotal + newTotal,
      };
    }),

  total: 0,
}));