const Button = ({
  type = 'button',
  label = 'Click',
  size = 'medium',
  backgroundColor = 'bg-blue-500',
  textColor = 'text-white',
  onClick,
}) => {
  const sizeScale = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-8 py-2 text-lg',
  };

  const scale = sizeScale[size] || sizeScale.medium;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${backgroundColor} ${textColor} ${scale} px-4 py-2 rounded-md hover:${backgroundColor}/85`}
    >
      {label}
    </button>
  );
};

export default Button;
