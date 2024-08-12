
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-[80vw] sm:w-[30vw] bg-zinc-950 border border-zinc-800 text-white p-6 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;