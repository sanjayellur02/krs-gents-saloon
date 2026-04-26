import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} onClick={e => handleNav(e, '#')}>
          <span className={styles.logoIcon}>✦</span>
          <span>
            <span className={styles.logoMain}>KRS</span>
            <span className={styles.logoSub}>Gents Beauty Salon</span>
          </span>
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className={styles.navLink}
               onClick={e => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a href="tel:+919876543210" className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.6rem 1.2rem' }}>
            📞 Call Now
          </a>
        </nav>

        <button className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
                onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
