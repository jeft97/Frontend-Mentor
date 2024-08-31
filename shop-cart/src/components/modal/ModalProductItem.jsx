import { formatCurreny } from '../helpers/helpers';

function ModalProductItem({ item }) {
   return (
      <li className="modal__list--item">
         <img src={item.image.thumbnail} alt={item.name} />
         <div className="text modal--text">
            <span className="modal__list--name">{item.name}</span>
            <div>
               <span className="modal--quantity">{item.quantity}x</span>
               <p>
                  @ {formatCurreny(item.price)}{' '}
                  <span>{formatCurreny(item.price * item.quantity)}</span>
               </p>
            </div>
         </div>
         <p>{formatCurreny(item.price * item.quantity)}</p>
      </li>
   );
}

export default ModalProductItem;
