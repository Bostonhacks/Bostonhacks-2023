const AcceptButton = ({ onClick }) => {
  return (
    <div className="justify-center flex mt-auto z-50 max-sm:scale-75">
      <button
        className="hover:text-gray-600"
        onClick={() => {
          onClick();
        }}
      >
        Click me to accept your spot!
      </button>
    </div>
  );
};

export default AcceptButton;
