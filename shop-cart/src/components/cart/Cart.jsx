import Button from '../ui/Button';
import CartEmpty from './CartEmpty';
import CartInfo from './CartInfo';
import CartProductList from './CartProductList';
import CartSummary from './CartSummary';
import './cart.style.css';

function Cart({ isLoading, cart, onRemoveItem, onConfirmOrder, errorMessage }) {
   const numProductCart = cart.length;
   const totalOrder = cart.reduce(
      (total, item) => item.price * item.quantity + total,
      0
   );

   return (
      <div className="cart">
         <h2 className="heading--2">
            Your Cart ({!isLoading && !errorMessage ? numProductCart : 0})
         </h2>
         {/*<CartEmpty />*/}
         {numProductCart > 0 && !isLoading && !errorMessage ? (
            <>
               <CartProductList onRemoveItem={onRemoveItem} cart={cart} />
               <CartSummary totalOrder={totalOrder} />
               <CartInfo />
               <Button onEvent={onConfirmOrder} sytles="btn--order">
                  Confirm Order
               </Button>
            </>
         ) : (
            <CartEmpty />
         )}
      </div>
   );
}

export default Cart;
