import { formatCurreny } from '../helpers/helpers';

function CartSummary({ totalOrder }) {
   return (
      <div className="cart__summary">
         <span>Order Total</span>
         <strong>{formatCurreny(totalOrder)}</strong>
      </div>
   );
}

export default CartSummary;
