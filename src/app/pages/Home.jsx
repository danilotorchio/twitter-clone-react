import { useContext } from 'react';
import { UserAvatar } from '../components/UserAvatar';
import { AuthContext } from '../utils/AuthContext';

const HomePage = () => {
  const [authState, _] = useContext(AuthContext);

  return (
    <div className="container d-flex flex-column gap-3 animate__animated animate__fadeIn">
      {authState && (
        <div className="card border border-0 shadow-sm">
          <div className="card-body d-flex flex-column gap-3">
            <textarea
              className="form-control"
              rows={3}
              placeholder="No que você está pensando?"
              style={{ resize: 'none' }}
            ></textarea>
            <button className="btn btn-primary align-self-end">
              Compartilhar
            </button>
          </div>
        </div>
      )}

      <div className="card border border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex gap-2">
            <div style={{ minWidth: '45px' }}>
              <UserAvatar />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column">
                <span className="text-primary" style={{ fontSize: '14px' }}>
                  Danilo Torchio
                </span>
                <span className="text-muted" style={{ fontSize: '12px' }}>
                  25/09/2024 - 14:45
                </span>
              </div>

              <div className="mt-1">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt hic sunt ad? Sed sint quas cumque praesentium neque
                  minima tempora. Vel cumque laudantium soluta rem atque qui
                  corrupti, repellat eligendi?
                </span>
              </div>
            </div>
          </div>

          <div className="ps-5 my-4">
            <hr />
          </div>

          <div className="d-flex gap-2">
            <div style={{ minWidth: '45px' }}>
              <UserAvatar hashEmail="0ab1e237a3411f4a9a55dae88c786a4b" />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column">
                <span className="text-primary" style={{ fontSize: '14px' }}>
                  Bruno Botelho
                </span>
                <span className="text-muted" style={{ fontSize: '12px' }}>
                  25/09/2024 - 14:40
                </span>
              </div>

              <div className="mt-1">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt hic sunt ad? Sed sint quas cumque praesentium neque
                  minima tempora. Vel cumque laudantium soluta rem atque qui
                  corrupti, repellat eligendi?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
