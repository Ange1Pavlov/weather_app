const Button = ({ type, label, backgroundColor, textColor }) => {
  return (
    <button
      type={type}
      className={`${backgroundColor ? backgroundColor : 'bg-blue-500'} ${textColor ? textColor : 'text-white'} px-4 py-2 rounded-md hover:bg-orange-800}`}
    >
      {label}
    </button>
  );
};

export default Button;
