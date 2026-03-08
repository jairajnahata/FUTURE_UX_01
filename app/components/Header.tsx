import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Scissors } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Book Now' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        .nav-link-item {
          position: relative;
          padding: 4px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: #FFF8EE;
          text-decoration: none;
          transition: color 0.3s;
          letter-spacing: 0.02em;
        }
        .nav-link-item.active {
          color: #FF6B00;
          font-weight: 600;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: #FFD700;
          transition: width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .nav-link-item:hover::after,
        .nav-link-item.active::after {
          width: 100%;
        }
        .nav-link-item:hover {
          color: #FFD700;
        }
        .btn-book-header {
          background: #FF6B00;
          color: white;
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.1em;
          font-size: 1rem;
          padding: 8px 20px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.3s, transform 0.2s;
          display: inline-block;
        }
        .btn-book-header:hover {
          background: #E8005A;
          transform: scale(1.05);
        }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(13,13,13,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,107,0,0.25)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.3 }}>
              <Scissors size={26} style={{ color: '#FF6B00' }} />
            </motion.div>
            <div>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                color: '#FF6B00',
                fontWeight: 900,
                fontSize: '1.15rem',
                lineHeight: 1,
              }}>Sri Sai</div>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                color: '#FFD700',
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                lineHeight: 1.2,
              }}>MEN'S HAIR SALOON</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(0, 2).map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link-item ${location.pathname === to ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" className="btn-book-header">
              Book Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: '#FFD700', background: 'rgba(255,215,0,0.08)', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: 'rgba(13,13,13,0.98)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,107,0,0.3)',
                overflow: 'hidden',
              }}
            >
              <nav className="flex flex-col items-center gap-2 py-6 px-6">
                {NAV_LINKS.map(({ to, label }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="w-full"
                  >
                    <Link
                      to={to}
                      className="block w-full py-3 text-center"
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '1.6rem',
                        letterSpacing: '0.12em',
                        color: location.pathname === to ? '#FF6B00' : '#FFF8EE',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(255,215,0,0.1)',
                      }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
