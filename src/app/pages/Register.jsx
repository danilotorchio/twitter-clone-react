import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 gap-3">
      <form className="d-flex flex-column gap-2" style={{ minWidth: 450 }}>
        <input type="email" className="form-control" placeholder="E-mail" />
        <input type="password" className="form-control" placeholder="Senha" />
        <input
          type="password"
          className="form-control"
          placeholder="Confirmação de Senha"
        />

        <button type="button" className="btn btn-primary w-100 mt-3">
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
