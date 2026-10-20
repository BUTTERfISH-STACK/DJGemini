import { useState } from 'react'
import './App.css'

const WHATSAPP = '27816559017'

const gallery = [
  {
    image: 'photo-1571266028243-d220c9c3b3e7',
    title: 'The Atmosphere',
    category: 'LIVE EXPERIENCE',
  },
  {
    image: 'photo-1506157786151-b8491531f063',
    title: 'Crowd Energy',
    category: 'THE MOMENT',
  },
  {
    image: 'photo-1470229722913-7c0e2dbbafd3',
    title: 'After Dark',
    category: 'NIGHTLIFE',
  },
  {
    image: 'photo-1492684223066-81342ee5ff30',
    title: 'Lights & Sound',
    category: 'THE NIGHT',
  },
  {
    image: 'photo-1501386761578-eac5c94b800a',
    title: 'Festival Energy',
    category: 'LIVE & LOUD',
  },
]

const musicStyles = [
  { number: '01', name: 'House Music', detail: 'Deep grooves. Timeless rhythm.' },
  { number: '02', name: 'Amapiano', detail: 'South African sound. Pure energy.' },
  { number: '03', name: 'Afro House', detail: 'Percussion, soul and movement.' },
  { number: '04', name: 'Afrikaans Hits', detail: 'Popular Afrikaans favourites for every singalong.' },
  { number: '05', name: 'Afrikaanse Bangers', detail: 'Party anthems, lekker hits and crowd favourites.' },
  { number: '06', name: 'Open Format', detail: 'A versatile set built around your crowd.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    event: 'Private Event',
    date: '',
    venue: '',
    guests: '',
    music: 'Open Format',
    details: '',
  })

  function updateField(event) {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }))
  }

  function submitBooking(event) {
    event.preventDefault()

    const message = [
      'Hello DJ BLAZ3! I would like to enquire about a booking.',
      '',
      'BOOKING ENQUIRY',
      `Name: ${form.name}`,
      `Event type: ${form.event}`,
      `Event date: ${form.date || 'Not confirmed yet'}`,
      `Venue / location: ${form.venue || 'Not confirmed yet'}`,
      `Expected guests: ${form.guests || 'Not specified'}`,
      `Preferred music: ${form.music}`,
      `Additional details: ${form.details || 'None provided'}`,
      '',
      'Please let me know your availability and booking requirements.',
    ].join('\n')

    window.location.href =
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="DJ BLAZ3 home">
          <span className="brand-mark">G<span>.</span></span>
          <span className="brand-copy">
            <strong>DJ BLAZ3</strong>
            <small>THE SOUND EXPERIENCE</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#music" onClick={closeMenu}>Music</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-book" href="#booking" onClick={closeMenu}>Book DJ BLAZ3 <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-shade" />

          <div className="hero-content">
            <div className="eyebrow"><span /> MUSIC. ENERGY. EXPERIENCE.</div>
            <h1>NOT JUST<br />MUSIC.<br /><em>A MOVEMENT.</em></h1>
            <p className="hero-description">
              The right sound changes everything. Set the mood, move the crowd,
              and make your event unforgettable.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#booking">ENQUIRE ABOUT A BOOKING <span>↗</span></a>
              <a className="button button-outline" href="#music">EXPLORE THE SOUND <span>↓</span></a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              YOUR EVENT. YOUR ENERGY. YOUR SOUND.
            </div>
          </div>

          <div className="hero-side-label">INDEPENDENT SOUND EXPERIENCE</div>
          <a className="scroll-cue" href="#music"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro section-pad" id="experience">
          <div className="section-kicker">01 / THE EXPERIENCE</div>
          <div className="intro-grid">
            <h2>EVERY EVENT<br />HAS A <em>RHYTHM.</em></h2>
            <div className="intro-copy">
              <p>
                A great DJ does more than play tracks. It's about reading the
                room, building the energy and creating the kind of atmosphere
                people remember long after the last song.
              </p>
              <p>
                From intimate celebrations to lively parties, let's find the
                sound that fits your occasion.
              </p>
              <a className="text-link" href="#booking">LET'S PLAN YOUR EVENT <span>↗</span></a>
            </div>
          </div>
          <div className="experience-strip">
            <div><span className="strip-number">01</span><span>THE RIGHT SOUND</span></div>
            <div><span className="strip-number">02</span><span>THE RIGHT ENERGY</span></div>
            <div><span className="strip-number">03</span><span>YOUR MOMENT</span></div>
          </div>
        </section>

        <section className="music section-pad" id="music">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / THE SOUND</div>
              <h2>BUILT AROUND<br /><em>YOUR VIBE.</em></h2>
            </div>
            <p>Different crowds. Different moments.<br />One sound tailored to your event.</p>
          </div>

          <div className="music-list">
            {musicStyles.map((style) => (
              <div className="music-row" key={style.number}>
                <span className="music-number">{style.number}</span>
                <h3>{style.name}</h3>
                <p>{style.detail}</p>
                <span className="music-arrow">↗</span>
              </div>
            ))}
          </div>
          <p className="music-footnote">
            From Afrikaans classics and modern bangers to house, Amapiano and
            mixed party playlists, tell us the sound you want in your booking enquiry.
            Specific songs and playlist requests can be discussed directly with DJ BLAZ3.
          </p>
        </section>

        <section className="statement">
          <div className="statement-image" />
          <div className="statement-overlay" />
          <div className="statement-content">
            <div className="section-kicker">THE GEMINI STANDARD</div>
            <p>GOOD MUSIC<br />IS HEARD.</p>
            <h2>GREAT MUSIC<br /><em>IS FELT.</em></h2>
            <a className="button button-gold" href="#booking">MAKE IT YOUR EVENT <span>↗</span></a>
          </div>
        </section>

        <section className="gallery section-pad" id="gallery">
          <div className="section-heading">
            <div>
              <div className="section-kicker">03 / THE VISUALS</div>
              <h2>FEEL THE<br /><em>ATMOSPHERE.</em></h2>
            </div>
            <p>Every crowd has a story.<br />Every event has its own energy.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <article className={`gallery-card gallery-card-${index + 1}`} key={item.title}>
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1000&q=85`}
                  alt={item.title}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src =
                      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=80'
                  }}
                />
                <div className="gallery-overlay" />
                <div className="gallery-caption">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
                <span className="gallery-index">0{index + 1}</span>
              </article>
            ))}
          </div>
          <p className="gallery-disclaimer">
            Visuals are illustrative. Replace these images with DJ BLAZ3's own event photos when available.
          </p>
        </section>

        <section className="booking section-pad" id="booking">
          <div className="booking-grid">
            <div className="booking-copy">
              <div className="section-kicker">04 / MAKE IT HAPPEN</div>
              <h2>LET'S MAKE<br />SOMETHING <em>MOVE.</em></h2>
              <p>
                Tell us a little about your event. Your enquiry will open in
                WhatsApp, where you can review the details and send your
                message directly to DJ BLAZ3.
              </p>
              <p className="response-note">
                Every enquiry is reviewed personally. Bookings are subject to availability and confirmation.
              </p>
            </div>

            <form className="booking-form" onSubmit={submitBooking}>
              <div className="form-heading">
                <span>BOOKING ENQUIRY</span>
                <span className="form-step">01 — 06</span>
              </div>

              <label htmlFor="name">YOUR NAME *</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Full name"
                value={form.name}
                onChange={updateField}
                required
              />

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="event">EVENT TYPE *</label>
                  <select id="event" name="event" value={form.event} onChange={updateField} required>
                    <option>Private Event</option>
                    <option>Birthday Party</option>
                    <option>Wedding</option>
                    <option>Club / Nightlife</option>
                    <option>Corporate Event</option>
                    <option>Festival</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="date">EVENT DATE</label>
                  <input id="date" name="date" type="date" value={form.date} onChange={updateField} />
                </div>
              </div>

              <label htmlFor="venue">VENUE / LOCATION</label>
              <input
                id="venue"
                name="venue"
                placeholder="Town, venue or event location"
                value={form.venue}
                onChange={updateField}
              />

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="guests">EXPECTED GUESTS</label>
                  <select id="guests" name="guests" value={form.guests} onChange={updateField}>
                    <option value="">Select range</option>
                    <option>Under 50</option>
                    <option>50–100</option>
                    <option>100–250</option>
                    <option>250–500</option>
                    <option>500+</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="music">MUSIC STYLE</label>
                  <select id="music" name="music" value={form.music} onChange={updateField}>
                    <option>Open Format</option>
                    <option>House Music</option>
                    <option>Amapiano</option>
                    <option>Afro House</option>
                    <option>Afrikaans Hits</option>
                    <option>Afrikaanse Bangers & Singalongs</option>
                    <option>Afrikaans Party Playlist</option>
                    <option>Mixed Genres</option>
                    <option>Other / Discuss</option>
                  </select>
                </div>
              </div>

              <label htmlFor="details">ANYTHING ELSE?</label>
              <textarea
                id="details"
                name="details"
                placeholder="Timings, special requests, duration or other details..."
                rows="3"
                value={form.details}
                onChange={updateField}
              />

              <button className="button button-gold form-submit" type="submit">
                CONTINUE TO WHATSAPP <span>↗</span>
              </button>
              <p className="form-privacy">
                No account required. Your message is sent only when you press Send in WhatsApp.
              </p>
            </form>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div>
            <div className="section-kicker">HAVE A QUESTION?</div>
            <h2>LET'S TALK <em>MUSIC.</em></h2>
          </div>
          <a
            className="button button-outline"
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello DJ BLAZ3, I would like to discuss a potential booking.')}`}
            target="_blank"
            rel="noreferrer"
          >
            MESSAGE ON WHATSAPP <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">G<span>.</span></span>
          <span className="brand-copy">
            <strong>DJ BLAZ3</strong>
            <small>THE SOUND EXPERIENCE</small>
          </span>
        </a>
        <p>GOOD MUSIC. GREAT MOMENTS.</p>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DJ BLAZ3</span>
          <span>MADE FOR THE MOMENT.</span>
        </div>
      </footer>
    </>
  )
}

export default App
