import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../utils/AuthContext';

const LoginPage = () => {
  const [_, setAuthState] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setAuthState(true);
    localStorage.setItem('auth', true);

    navigate('/');
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 gap-3">
      <form className="d-flex flex-column gap-2" style={{ minWidth: 450 }}>
        <input type="email" className="form-control" placeholder="E-mail" />
        <input type="password" className="form-control" placeholder="Senha" />

        <button
          type="button"
          className="btn btn-primary w-100 mt-3"
          onClick={handleLogin}
        >
          Entrar
        </button>

        <span className="text-center mt-5">Ainda não tem uma conta?</span>

        <Link to={'/register'} className="btn btn-primary w-100">
          Crie sua conta
        </Link>
      </form>
    </div>
  );
};

export { LoginPage };
