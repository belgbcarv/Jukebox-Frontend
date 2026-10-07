import { Link } from 'react-router-dom'
import { CallToAction } from '../components/CallToAction'
import { Features } from '../components/Features'
import { Repositories } from '../components/Repositories'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'
import './Home.scss'

export const Home = () => {
  return (
    <div className="landing-page">
      <Header />

      <main>
        {/* Introduction to the project */}
        <section className="landing-hero">
          <h1>
            Welcome to the <span>Jukebox</span> Project
          </h1>

          <p>
            Bring people together through music. Jukebox lets you add songs,
            vote on tracks, and build a shared music queue.
          </p>

          <Link to="/auth/register" className="hero-button">
            Get Started
          </Link>
        </section>
        {/* About the project */}
        <section id="about" className="landing-about">
          <h2>Who Are We?</h2>

          <p>
            Jukebox is an open-source project for collaborative listening. It
            lets people manage a shared music queue at social gatherings and in
            public spaces.
          </p>
        </section>
        <Features />
        <Repositories />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
