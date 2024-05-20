import Header from './Header';
import LocationFrom from './LocationFrom';

const MainCard = ({ showHeader, children }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden min-h-36'>
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
