import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],

  addItem: (newItem) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...newItem, quantity: 1 }],
      };
    });
  },

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    })),

    total: () => {
      const { items } = get() || { items: [] };
      const totalAmount = items?.reduce(
        (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
        0
      );
      
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(totalAmount);
    },
}));

