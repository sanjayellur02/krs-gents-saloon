import React from 'react'
import styles from './About.module.css'

const PILLARS = [
  { icon: '✦', title: 'Expert Barbers', desc: 'Trained professionals with years of experience in precision cuts and grooming techniques.' },
  { icon: '✦', title: 'Hygienic Standards', desc: 'Sterilised tools and fresh towels for every client — because your health is non-negotiable.' },
  { icon: '✦', title: 'Premium Products', desc: 'We use top-quality grooming products that care for your skin and hair long after you leave.' },
  { icon: '✦', title: 'Walk-ins Welcome', desc: 'No appointment needed. Come in anytime between 9 AM and 9 PM, any day of the week.' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.textCol}>
          <span className="section-label">About Us</span>
          <div className="gold-divider left" />
          <h2 className={styles.heading}>
            Bengaluru's Preferred<br />
            <em>Gentleman's Grooming Destination</em>
          </h2>
          <p className={styles.para}>
            New KRS Gents Beauty Salon has been serving the men of Bengaluru with dedication, precision, and care. Located conveniently near Bommanahalli, we bring professional grooming to your doorstep — without the premium price tag.
          </p>
          <p className={styles.para}>
            Whether you're coming in for a quick trim before a meeting, a beard sculpt for date night, or a full facial treatment to refresh your skin, our expert team ensures you walk out feeling your absolute best.
          </p>
          <a href="tel:+919916831615" className="btn-primary" style={{ marginTop: '1.5rem' }}>
            📞 Call for Appointment
          </a>
        </div>

        <div className={styles.pillarsCol}>
          {PILLARS.map((p, i) => (
            <div key={i} className={styles.pillar}>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <div>
                <h4 className={styles.pillarTitle}>{p.title}</h4>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
