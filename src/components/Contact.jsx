import React from 'react'
import styles from './Contact.module.css'

const HOURS = [
  { day: 'Monday – Friday', time: '9:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 8:00 PM' },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Find Us</span>
          <div className="gold-divider" />
          <h2 className={styles.heading}>Visit New KRS Gents Beauty Salon</h2>
        </div>

        <div className={styles.inner}>
          {/* Info Column */}
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <h4 className={styles.blockTitle}>📍 Address</h4>
              <p className={styles.blockText}>
                New KRS Gents Beauty Salon<br />
                Near Bommanahalli,<br />
                Bengaluru, Karnataka – 560068
              </p>
              <a href="https://maps.app.goo.gl/mLSCx6XghMoKXksk9"
                 target="_blank" rel="noopener noreferrer"
                 className={styles.mapLink}>
                Open in Google Maps →
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h4 className={styles.blockTitle}>📞 Contact</h4>
              <a href="tel:+919916831615" className={styles.phone}>+91 99168 31615</a>
              <a href="https://wa.me/919916831615?text=Hi%20KRS%20Salon%2C%20I%27d%20like%20to%20enquire"
                 target="_blank" rel="noopener noreferrer"
                 className={styles.whatsapp}>
                💬 Message on WhatsApp
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h4 className={styles.blockTitle}>🕐 Opening Hours</h4>
              {HOURS.map((h, i) => (
                <div key={i} className={styles.hourRow}>
                  <span className={styles.hourDay}>{h.day}</span>
                  <span className={styles.hourTime}>{h.time}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctas}>
              <a href="tel:+919916831615" className="btn-primary">📞 Call Now</a>
              <a href="https://wa.me/919916831615?text=Hi%20KRS%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment"
                 target="_blank" rel="noopener noreferrer" className="btn-outline">
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className={styles.mapWrapper}>
            <iframe
              title="New KRS Gents Beauty Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8234!2d77.6515014!3d12.899981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14a7288bfe7d%3A0x1ecc6bfa47ea4d73!2sNew%20KRS%20Gents%20Beauty%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
