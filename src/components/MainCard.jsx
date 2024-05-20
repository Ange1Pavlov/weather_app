import Header from './Header';
import LocationFrom from './LocationFrom';

const MainCard = ({ showHeader, children }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      {showHeader && (
        <Header>
          <LocationFrom />{' '}
        </Header>
      )}

      {children}
    </div>
  );
};

export default MainCard;
