import Modal from 'react-modal';

const Popup = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      style={{transform: "translate(-50%, -50%)"}}
      ariaHideApp={false}
    >
      {/* Modal Content */}
      <div className="relative z-10 max-w-md max-h-screen bg-white rounded-lg shadow-md p-4 border-2 border-gray-800" style={{ minWidth: '500px' }}>
        {children}
        {/* Close Icon */}
        <button 
          className="absolute -top-4 -right-4" 
          onClick={onRequestClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
            <path fill="white" strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <div 
        className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-5"
        onClick={onRequestClose}
      >
      </div>
    </Modal>
  );
};

export default Popup;