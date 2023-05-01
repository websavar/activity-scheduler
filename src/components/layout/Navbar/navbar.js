import logo from 'assets/images/logo.svg';

const Navbar = () =>
  <header>
    <div className={`container pl-8 h-[50px]`}>
      <div className="flex basis-2">
        <a aria-expanded="false" href={process.env.REACT_APP_BASE_URL}>
          <img src={logo} alt="logo" />
        </a>
      </div>
    </div>
  </header>;

export default Navbar;