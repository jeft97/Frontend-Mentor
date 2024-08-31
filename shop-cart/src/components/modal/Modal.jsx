import Button from '../ui/Button';
import ModalContent from './ModalContent';
import ModalProductList from './ModalProductList';
import ModalProductItem from './ModalProductItem';
import ModalSummary from './ModalSummary';
import { motion } from 'framer-motion';
import './modal.style.css';

function Modal({ cart, onClearCart }) {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         className="modal"
      >
         <ModalContent>
            <img src="./images/icon-order-confirmed.svg" alt="" />
            <h2 className="heading--1 u-mb-s">Order Confirmed</h2>
            <p className="paraghaphy">We hope you enjoy your food!</p>
            <ModalProductList>
               <div className="box-list">
                  {cart.map((item) => (
                     <ModalProductItem key={item.id} item={item} />
                  ))}
               </div>
               <ModalSummary cart={cart} />
            </ModalProductList>
            <Button onEvent={onClearCart} sytles="btn--order">
               Start New Order
            </Button>
         </ModalContent>
      </motion.div>
   );
}

export default Modal;
