import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Scissors, MapPin, Phone, Instagram, Facebook, Star } from 'lucide-react';

export function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          color: #aaa;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          transition: color 0.3s;
          display: block;
          margin-bottom: 8px;
        }
        .footer-link:hover { color: #FF6B00; }
        .social-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,215,0,0.3);
          color: #aaa;
          transition: all 0.3s;
          cursor: pointer;
          text-decoration: none;
        }
        .social-icon:hover {
          border-color: #FF6B00;
          color: #FF6B00;
          background: rgba(255,107,0,0.1);
          transform: translateY(-2px);
        }
        .social-fb:hover {
          border-color: #1877F2;
          color: #1877F2;
          background: rgba(24,119,242,0.1);
        }
        .social-google:hover {
          border-color: #FFD700;
          color: #FFD700;
          background: rgba(255,215,0,0.1);
        }
      `}</style>

      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid rgba(255,107,0,0.2)' }}
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scissors size={22} style={{ color: '#FF6B00' }} />
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', color: '#FF6B00', fontWeight: 900, fontSize: '1.2rem', lineHeight: 1 }}>Sri Sai</div>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFD700', fontSize: '0.6rem', letterSpacing: '0.25em' }}>MEN'S HAIR SALOON</div>
                </div>
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '240px' }}>
                Premium grooming for the modern man. Where every cut tells a story of style, pride, and craftsmanship.
              </p>
              <div className="mt-5 flex items-center gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={13} fill="#FFD700" style={{ color: '#FFD700' }} />)}
                <span style={{ fontFamily: 'DM Sans, sans-serif', color: '#FFD700', fontSize: '0.8rem', marginLeft: '6px' }}>4.9 · 500+ Reviews</span>
              </div>
              <div className="mt-4 flex items-start gap-2">
                <MapPin size={14} style={{ color: '#FF6B00', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  Near Hanuman Temple, Main Road,<br />Your City – 500001
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Phone size={14} style={{ color: '#FF6B00', flexShrink: 0 }} />
                <span style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.85rem' }}>+91 98765 43210</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFD700', fontSize: '1.1rem', letterSpacing: '0.15em', marginBottom: '16px' }}>
                QUICK LINKS
              </h4>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/services" className="footer-link">Our Services</Link>
              <Link to="/contact" className="footer-link">Book Appointment</Link>
              <a href="#" className="footer-link">Gallery</a>
              <a href="#" className="footer-link">About Us</a>
              <div className="mt-6 p-3 rounded-xl" style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.2)' }}>
                <div style={{ fontFamily: 'Cinzel Decorative, serif', color: '#FFD700', fontSize: '0.65rem', letterSpacing: '0.1em', marginBottom: '6px' }}>OPENING HOURS</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#ccc', fontSize: '0.83rem', lineHeight: 1.8 }}>
                  Monday : 9:00 AM – 8:00 PM<br />
                  <span style={{ color: '#E8005A' }}> Tuesday : Holiday</span><br />
                  Wednesday : 9:00 AM – 8:00 PM<br />
                  Thursday : 9:00 AM – 8:00 PM<br />
                  Friday : 9:00 AM – 8:00 PM<br />
                  Saturday : 9:00 AM – 8:00 PM<br />
                  Sunday : 9:00 AM – 8:00 PM<br />
                </div>
              </div>
            </div>

            {/* Column 3: Follow Us */}
            <div>
              <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFD700', fontSize: '1.1rem', letterSpacing: '0.15em', marginBottom: '16px' }}>
                FOLLOW US
              </h4>
              <div className="flex gap-3 mb-6">
                <a href="#" className="social-icon">
                  <Instagram size={16} />
                </a>
                <a href="#" className="social-icon social-fb">
                  <Facebook size={16} />
                </a>
                <a href="#" className="social-icon social-google">
                  <Star size={16} />
                </a>
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#666', fontSize: '0.83rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Follow us on social media for tips, transformations & special offers.
              </p>
              <div className="p-3 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(255,107,0,0.15), rgba(232,0,90,0.1))', border: '1px solid rgba(255,107,0,0.25)' }}>
                <div style={{ fontFamily: 'Cinzel Decorative, serif', color: '#FFD700', fontSize: '0.6rem', letterSpacing: '0.08em', marginBottom: '4px' }}>🏆 AWARD WINNER</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#FFF8EE', fontSize: '0.82rem' }}>Best Men's Saloon 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '16px 0' }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span style={{ fontFamily: 'DM Sans, sans-serif', color: '#555', fontSize: '0.8rem' }}>
              © 2026 Sri Sai Men's Hair Saloon. All rights reserved.
            </span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', color: '#FF6B00', fontSize: '0.82rem' }}>
              Walk-ins Always Welcome 💈
            </span>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
