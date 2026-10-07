import { Link } from 'react-router-dom'

// Header and navigation for the landing page
export const Header = () => {
  return (
    <header className="landing-header">
      <Link to="/public" className="landing-logo">
        Jukebox
      </Link>

      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="https://github.com/ufosc/Jukebox-Frontend/tree/main/docs">
          Docs
        </a>
        <a href="https://github.com/ufosc/Jukebox-Frontend/blob/main/CONTRIBUTING.md">
          Contribute
        </a>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register" className="landing-signup">
          Sign Up
        </Link>
      </nav>
    </header>
  )
}
