import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserAvatar } from './components/UserAvatar';
import { AuthContext } from '../utils/AuthContext';

const Header = () => {
  const [authState] = useContext(AuthContext);

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-primary shadow">
      <div className="container d-flex">
        <div className="flex-grow-1 d-flex justify-content-center">
          <Link
            to={'/'}
            className="fs-3 fw-medium text-white text-uppercase text-decoration-none"
          >
            Twitter Clone React
          </Link>
        </div>

        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minWidth: '150px', maxWidth: '150px' }}
        >
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
