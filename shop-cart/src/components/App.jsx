import { useEffect, useState } from 'react';
import Cart from './cart/Cart';
import Modal from './modal/Modal';
import Product from './product/Product';

function App() {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState(function () {
      return JSON.parse(localStorage.getItem('desert')) ?? [];
   });
   const [isLoading, setIsLoading] = useState(true);
   const [showModal, setShowModal] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   useEffect(() => {
      async function loadDessertsData() {
         try {
            const res = await fetch('http://localhost:8080/desserts');
            if (!res.ok)
               throw new Error(
                  '⛔️ Oops! Looks like we hit a snag loading the data.'
               );

            const data = await res.json();
            console.log(data);
            setProducts(data);
         } catch (error) {
            setErrorMessage(error.message);
         } finally {
            setIsLoading(false);
         }
      }

      loadDessertsData();
   }, []);

   useEffect(() => {
      localStorage.setItem('desert', JSON.stringify(cart));
   }, [cart]);

   function handleAddToCart(newProduct) {
      // Verifica se o produto já existe no carrinho
      const productExists = cart.some((item) => item.id === newProduct.id);

      if (productExists) {
         // Se o produto já existe, incrementa a quantidade
         const updatedCart = cart.map((item) => {
            if (item.id === newProduct.id) {
               return { ...item, quantity: item.quantity + 1 };
            }
            return item;
         });
         setCart(updatedCart);
      } else {
         // Se o produto não existe, adiciona ele com quantidade 1
         setCart([...cart, { ...newProduct, quantity: 1 }]);
      }
   }

   function handleIncrementQuantity(id) {
      setCart((prev) =>
         prev.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
         )
      );
   }

   function handleDecriseQuantity(id) {
      setCart((prev) =>
         prev.map((item) =>
            item.id === id
               ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Garante que a quantidade não seja menor que 1
               : item
         )
      );
   }

   function handleRemoveItem(id) {
      setCart((prev) => prev.filter((item) => item.id !== id));
   }

   function handleConfirmOrder() {
      setShowModal(true);
   }

   function handleClearCart() {
      setCart([]);
      setShowModal(false);
   }
   return (
      <main className="app">
         {showModal && <Modal cart={cart} onClearCart={handleClearCart} />}

         <div className="wrapper">
            <Product
               errorMessage={errorMessage}
               onAddToCart={handleAddToCart}
               products={products}
               isLoading={isLoading}
               cart={cart}
               onIncrementQuantity={handleIncrementQuantity}
               onDecriseQuantity={handleDecriseQuantity}
            />

            <Cart
               errorMessage={errorMessage}
               isLoading={isLoading}
               cart={cart}
               onRemoveItem={handleRemoveItem}
               onConfirmOrder={handleConfirmOrder}
            />
         </div>
      </main>
   );
}

export default App;
