const Input = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='border border-gray-300 rounded-md px-3 py-2 mr-2'
    />
  );
};

export default Input;
