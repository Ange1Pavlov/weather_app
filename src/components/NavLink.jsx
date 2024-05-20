import Link from 'next/link';

const NavLink = ({ href, label }) => {
  return (
    <Link
      href={href}
      className='text-white hover:text-gray-300 md:text-xl font-bold'
    >
      {label}
    </Link>
  );
};

export default NavLink;
