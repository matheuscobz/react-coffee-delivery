import { createContext, useState, ReactNode, useContext } from 'react';

interface Coffee {
  imagem: string;
  tipo: string;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
}

interface CartContextData {
  selectedCoffees: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedCoffees, setSelectedCoffees] = useState<Coffee[]>([]);

  function addCoffeeToCart(coffee: Coffee) {
    setSelectedCoffees((prevState) => [...prevState, coffee]);
  }

  return (
    <CartContext.Provider value={{ selectedCoffees, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart tem que ser usado dentro de CartProvider');
  }
  return context;
}
