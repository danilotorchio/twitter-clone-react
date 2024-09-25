import { useContext } from 'react';
import { AuthContext } from '../utils/AuthContext';

const UserAvatar = ({ hashEmail }) => {
  const [_, setAuthState] = useContext(AuthContext);

  const handleLogout = () => {
    console.log('logout');
    setAuthState(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn rounded border-0 p-0 m-0"
        data-bs-toggle="dropdown"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className="img-fluid rounded"
          height={40}
          width={40}
          src={`https://gravatar.com/avatar/${
            hashEmail ?? '3baa9c554cbe7979a888154820587a70'
          }?s=75&d=mp`}
        />
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <h6 className="dropdown-header">Danilo Rodrigues Torchio</h6>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Perfil
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Configurações
          </button>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item"
            onClick={handleLogout}
          >
            Sair
          </button>
        </li>
      </ul>
    </div>
  );
};

export { UserAvatar };
