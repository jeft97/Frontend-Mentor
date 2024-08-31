function Button({ sytles, children, onEvent = null }) {
   return (
      <button onClick={onEvent} className={`btn ${sytles}`}>
         {children}
      </button>
   );
}

export default Button;
