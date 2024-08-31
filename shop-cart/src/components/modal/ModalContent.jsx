import { motion } from 'framer-motion';
function ModalContent({ children }) {
   return (
      <motion.div
         initial={{ x: '-100vw' }}
         animate={{ x: 0 }}
         transition={{ delay: 0.2 }}
         className="modal__content"
      >
         {children}
      </motion.div>
   );
}

export default ModalContent;
