// Feature descriptions based on the project's README
const features = [
  {
    title: 'Shared Music Queue',
    description: 'Build a shared queue of songs with other listeners.',
  },
  {
    title: 'Add Songs',
    description: 'Choose tracks and add them to the music queue.',
  },
  {
    title: 'Vote on Tracks',
    description: 'Vote on songs to help influence the queue order.',
  },
  {
    title: 'Manage the Queue',
    description: 'Add and remove tracks from the shared playlist.',
  },
  {
    title: 'Playback Controls',
    description: 'Control music playback through the Jukebox interface.',
  },
  {
    title: 'Listen Together',
    description: 'Share music at social gatherings and in public spaces.',
  },
]

export const Features = () => {
  return (
    <section id="features" className="landing-features">
      <h2>Notable Features</h2>

      <div className="features-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            {/*emoji de musica para titulo*/}
            <span className="feature-icon" aria-hidden="true">
              🎶
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="https://github.com/ufosc/Jukebox-Frontend#overview">
              Learn more →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
