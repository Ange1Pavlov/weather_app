import Link from 'next/link';
import LocationFrom from './LocationFrom';

const Header = () => {
  return (
    <header className="bg-gray-700 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="text-white hover:text-gray-300 text-xl font-bold"
        >
          Home
        </Link>

        <div className="flex items-center">
          <LocationFrom />
        </div>
      </div>
    </header>
  );
};

export default Header;
