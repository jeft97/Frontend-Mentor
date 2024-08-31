import { formatCurreny } from '../helpers/helpers';

function ModalSummary({ cart }) {
   const totalPriceOrder = cart.reduce((total, item) => total + item.price, 0);
   return (
      <div className="cart__summary">
         <span>Order Total</span>
         <strong>{formatCurreny(totalPriceOrder)}</strong>
      </div>
   );
}

export default ModalSummary;
