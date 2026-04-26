import React from 'react'
import styles from './Gallery.module.css'

const GALLERY_ITEMS = [
  {
    label: 'Fade Cut',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=700&fit=crop&q=80',
    span: 'large',
  },
  {
    label: 'Beard Sculpt',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop&q=80',
    span: 'small',
  },
  {
    label: 'Clean Shave',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=300&fit=crop&q=80',
    span: 'small',
  },
  {
    label: 'Style Cut',
    image: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=400&h=300&fit=crop&q=80',
    span: 'small',
  },
 
]


export default function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Our Work</span>
          <div className="gold-divider" />
          <h2 className={styles.heading}>The KRS Signature</h2>
          <p className={styles.sub}>
            Every style crafted with precision. Every client leaves looking their best.
          </p>
        </div>

        <div className={styles.grid}>
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className={`${styles.item} ${styles[item.span]}`}>
              <img
                src={item.image}
                alt={item.label}
                className={styles.img}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.overlayLabel}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Follow us on Google Maps for the latest photos ·{' '}
          <a href="https://maps.app.goo.gl/mLSCx6XghMoKXksk9"
             target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
            View on Google Maps →
          </a>
        </p>
      </div>
    </section>
  )
}