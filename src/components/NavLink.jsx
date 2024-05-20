import Link from 'next/link';

const NavLink = ({ href, label }) => {
  return (
    <Link
      href={href}
      className='text-white hover:text-gray-300 text-xl font-bold pb-3 md:pb-0'
    >
      {label}
    </Link>
  );
};

export default NavLink;
