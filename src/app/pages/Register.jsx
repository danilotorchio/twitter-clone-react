import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../utils/AuthContext';

const RegisterPage = () => {
  const [_, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    setAuth(true);
    localStorage.setItem('auth', true);

    navigate('/');
  };

  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__fadeIn">
      <form className="d-flex flex-column gap-2" style={{ minWidth: 450 }}>
        <input type="email" className="form-control" placeholder="E-mail" />
        <input type="password" className="form-control" placeholder="Senha" />
        <input
          type="password"
          className="form-control"
          placeholder="Confirmação de Senha"
        />

        <button type="button" className="btn btn-primary w-100 mt-3" onClick={handleRegister}>
          Cadastrar
        </button>

        <span className="text-center mt-5">Já possui uma conta?</span>

        <Link to={'/login'} className="btn btn-primary w-100">
          Entrar
        </Link>
      </form>
    </div>
  );
};

export { RegisterPage };
