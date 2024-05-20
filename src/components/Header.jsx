import NavLink from './NavLink';

const Header = ({
  pageLabel = 'Home',
  backgroundColor = 'bg-gray-700',
  children,
}) => {
  return (
    <header className={`${backgroundColor} py-4`}>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4'>
        <NavLink href='/' label={pageLabel} />
        {children && <div className='flex items-center'>{children}</div>}
      </div>
    </header>
  );
};

export default Header;
