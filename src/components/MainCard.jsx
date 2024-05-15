import Header from './Header';
const MainCard = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Header />
      {children}
    </div>
  );
};

export default MainCard;
