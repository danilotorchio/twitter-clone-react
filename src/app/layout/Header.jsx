import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserAvatar } from '../components/UserAvatar';
import { AuthContext } from '../utils/AuthContext';

const Header = () => {
  const [authState] = useContext(AuthContext);

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-primary shadow">
      <div className="container d-flex position-relative px-2">
        <Link
          to={'/'}
          className="fs-3 fw-medium text-white text-uppercase text-decoration-none w-100 header-text"
        >
          Twitter Clone React
        </Link>

        <div className="position-absolute end-0 pe-2">
          {authState ? (
            <UserAvatar />
          ) : (
            <Link
              to={'/login'}
              className="btn btn-outline-light link-primary-hover text-uppercase"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Header };
