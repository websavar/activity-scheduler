import logo from 'assets/images/logo.svg';

const Navbar = () => {

  return (
    <header>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 col-sm-2">
            {/* <a aria-expanded="false" href={window.env.REACT_APP_BASE_URL}> */}
            <a aria-expanded="false" href='/'>
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="col-12 col-sm-4 d-flex align-items-center justify-content-end">

          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;