import { Link } from 'react-router-dom'

export const Repositories = () => {
  return (
    <section id="repositories" className="landing-repositories">
      <div className="repositories-heading">
        <h2>Repositories</h2>

        <Link to="/auth/register" className="repositories-signup">
          Sign Up
        </Link>
      </div>

      {/* primeiro repositorio expandido */}
      <details className="repository-item" open>
        <summary>
          <span className="repository-number">01</span>
          <strong>Jukebox Frontend</strong>
        </summary>

        <div className="repository-content">
          <div>
            <p>
              The React interface for selecting songs, managing the queue, and
              sharing music with other listeners.
            </p>
            <a href="https://github.com/ufosc/Jukebox-Frontend">
              View repository →
            </a>
          </div>
          <span className="repository-badge">React</span>
        </div>
      </details>

      <details className="repository-item">
        <summary>
          <span className="repository-number">02</span>
          <strong>Jukebox Server</strong>
        </summary>

        <div className="repository-content">
          <div>
            <p>
              The application server that connects with Spotify and supports
              shared music queues.
            </p>
            <a href="https://github.com/ufosc/Jukebox-Server">
              View repository →
            </a>
          </div>
          <span className="repository-badge">NestJS</span>
        </div>
      </details>

      <details className="repository-item">
        <summary>
          <span className="repository-number">03</span>
          <strong>Club Portal Backend</strong>
        </summary>

        <div className="repository-content">
          <div>
            <p>
              The club management backend referenced as Club Manager in the
              Jukebox Server documentation.
            </p>
            <a href="https://github.com/UF-CSU/club-portal-backend">
              View repository →
            </a>
          </div>
          <span className="repository-badge">Django</span>
        </div>
      </details>
    </section>
  )
}
