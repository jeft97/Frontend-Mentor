import { formatCurreny } from '../helpers/helpers';
import { motion } from 'framer-motion';
function CartProductList({ cart, onRemoveItem }) {
   return (
      <ul className="cart__list">
         {cart.map((item) => (
            <motion.li
               initial={{ x: '10vw' }}
               animate={{ x: 0 }}
               key={item.id}
               className="cart__list--item"
            >
               <div className="text">
                  <span className="product--name">{item.name}</span>
                  <div>
                     <span className="cart--quantity">{item.quantity}x</span>
                     <p>
                        @ {formatCurreny(Number(item.price))}
                        <span>{formatCurreny(item.price * item.quantity)}</span>
                     </p>
                  </div>
               </div>
               <button
                  onClick={() => onRemoveItem(item.id)}
                  className="btn btn--remove"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="10"
                     height="10"
                     fill="none"
                     viewBox="0 0 10 10"
                  >
                     <path
                        fill="#CAAFA7"
                        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                     />
                  </svg>
               </button>
            </motion.li>
         ))}
      </ul>
   );
}

export default CartProductList;
