import { Outlet, useLocation, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Phone, Calendar } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', position: 'relative' }}>
      <Header />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />

      {/* Mobile Fixed Bottom Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex"
        style={{
          backgroundColor: '#0A0A0A',
          borderTop: '1px solid rgba(255,107,0,0.3)',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.6)',
        }}
      >
        <a
          href="tel:+919876543210"
          className="flex-1 flex items-center justify-center gap-2 py-4"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1rem',
            letterSpacing: '0.08em',
            color: '#FFD700',
            textDecoration: 'none',
            borderRight: '1px solid rgba(255,107,0,0.2)',
          }}
        >
          <Phone size={16} />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-4"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1rem',
            letterSpacing: '0.08em',
            color: 'white',
            textDecoration: 'none',
            background: 'linear-gradient(90deg, #FF6B00, #E8005A)',
          }}
        >
          <Calendar size={16} />
          Book Now
        </Link>
      </div>
    </div>
  );
}
