import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Clock, Scissors } from 'lucide-react';

const SERVICES = [
  {
    title: 'Classic Haircut',
    price: '₹120',
    duration: '30 min',
    desc: 'A timeless precision cut tailored perfectly to your face shape and personal style. Includes wash and finish.',
    img: 'https://images.unsplash.com/photo-1706769015484-248bd241945c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700',
  },
  {
    title: 'Fade & Taper',
    price: '₹180',
    duration: '45 min',
    desc: 'Clean, sharp fades from skin to full length. Low, mid, or high — we master every gradient with precision.',
    img: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700',
  },
  {
    title: 'Beard Shaping',
    price: '₹100',
    duration: '20 min',
    desc: 'Expert beard sculpting, edge-up and conditioning. We define lines that frame your face perfectly.',
    img: 'https://images.unsplash.com/photo-1733995471058-3d6ff2013de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700',
  },
  {
    title: 'Hot Towel Shave',
    price: '₹150',
    duration: '35 min',
    desc: 'The ultimate luxury shave experience. Hot towel prep, premium foam, straight razor finish — pure bliss.',
    img: 'https://images.unsplash.com/photo-1761148438883-e34e0289a214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700',
  },
  {
    title: 'Hair Colour',
    price: '₹350+',
    duration: '60 min',
    desc: 'Global colour, highlights, and grey blending with professional-grade products for a vibrant, lasting finish.',
    img: 'https://images.unsplash.com/photo-1551386234-48770e28e791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700',
  },
  {
    title: 'Scalp Massage',
    price: '₹250',
    duration: '40 min',
    desc: 'A deep, relaxing scalp massage with nourishing oils to boost circulation and leave your hair revitalised.',
    img: 'https://images.unsplash.com/photo-1722351153083-e32ff83a0c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700',
  },
];

const COMBOS = [
  {
    name: 'The Full Groom Pack',
    items: 'Haircut + Beard Shaping + Hot Towel Shave',
    original: '₹370',
    price: '₹299',
    save: 'Save ₹71',
    badge: '🔥 Most Popular',
  },
  {
    name: 'Student Special',
    items: 'Fade & Taper + Beard Shaping',
    original: '₹280',
    price: '₹219',
    save: 'Save ₹61',
    badge: '🎓 Best Value',
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        backgroundColor: '#141414',
        borderRadius: '18px',
        overflow: 'hidden',
        border: hovered ? '1px solid #FF6B00' : '1px solid rgba(255,255,255,0.07)',
        boxShadow: hovered ? '0 20px 50px rgba(255,107,0,0.2)' : '0 4px 20px rgba(0,0,0,0.4)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {/* Image */}
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <motion.img
          src={service.img}
          alt={service.title}
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.55 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,20,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        {/* Duration badge */}
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          background: '#1A3BCC',
          borderRadius: '50px', padding: '4px 12px',
          fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.75rem', color: '#fff',
          display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          <Clock size={11} />
          {service.duration}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px 24px' }}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.4rem', color: '#FFF8EE', letterSpacing: '0.08em', margin: 0 }}>
            {service.title}
          </h3>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.4rem', color: '#FFD700', letterSpacing: '0.05em', flexShrink: 0 }}>
            {service.price}
          </span>
        </div>
        <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#777', fontSize: '0.84rem', lineHeight: 1.65, margin: '0 0 16px' }}>
          {service.desc}
        </p>
        <Link
          to="/contact"
          style={{
            display: 'inline-block',
            background: hovered ? 'linear-gradient(90deg, #FF6B00, #E8005A)' : 'rgba(255,107,0,0.12)',
            border: '1px solid rgba(255,107,0,0.4)',
            color: '#FF6B00',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '0.95rem',
            letterSpacing: '0.1em',
            padding: '9px 22px',
            borderRadius: '50px',
            textDecoration: 'none',
            color: hovered ? '#fff' : '#FF6B00',
            transition: 'all 0.35s',
          }}
        >
          Book This ✂️
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesPage() {
  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh' }}>
      {/* ── HERO BANNER ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '120px',
          paddingBottom: '80px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #111 0%, #0D0D0D 100%)',
        }}
      >
        {/* Barber tools image BG */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1593269211259-b2367de7dba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,107,0,0.08), transparent 70%)' }} />
        </div>
        {/* Grain */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.05, pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span style={{ fontFamily: 'Cinzel Decorative, serif', color: '#FFD700', fontSize: '0.65rem', letterSpacing: '0.35em', display: 'block', marginBottom: '16px' }}>
              SRI SAI MEN'S HAIR SALOON
            </span>
            <h1 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(3rem, 9vw, 6rem)',
              color: '#FFF8EE',
              letterSpacing: '0.1em',
              margin: 0,
              lineHeight: 1,
            }}>
              OUR SERVICES
            </h1>
            {/* Gold underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ height: '4px', background: 'linear-gradient(90deg, #FFD700, #FF6B00)', margin: '16px auto 0', borderRadius: '2px' }}
            />
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '1rem', marginTop: '20px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Premium grooming services crafted with skill, care, and passion for the modern man.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ padding: '70px 0 90px' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── COMBO DEALS ── */}
      <section style={{ padding: '0 0 90px' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Scissors divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #FFD700)' }} />
            <div className="flex items-center gap-2" style={{ color: '#FFD700' }}>
              <Scissors size={20} />
              <span style={{ fontFamily: 'Cinzel Decorative, serif', color: '#FFD700', fontSize: '0.7rem', letterSpacing: '0.15em' }}>COMBO DEALS</span>
              <Scissors size={20} style={{ transform: 'scaleX(-1)' }} />
            </div>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #FFD700, transparent)' }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMBOS.map((combo, i) => (
              <motion.div
                key={combo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{
                  background: 'linear-gradient(135deg, #1a1000, #1a0a00)',
                  border: '1px solid rgba(255,215,0,0.35)',
                  borderRadius: '18px',
                  padding: '28px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Gold shimmer overlay */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, #FFD700, #FF6B00, #FFD700)',
                }} />

                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'inline-block',
                      background: 'rgba(255,215,0,0.12)',
                      border: '1px solid rgba(255,215,0,0.3)',
                      borderRadius: '50px',
                      padding: '3px 12px',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.75rem',
                      color: '#FFD700',
                      marginBottom: '10px',
                    }}>
                      {combo.badge}
                    </div>
                    <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', color: '#FFF8EE', letterSpacing: '0.08em', margin: '0 0 8px' }}>
                      {combo.name}
                    </h3>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.85rem', margin: '0 0 14px', lineHeight: 1.5 }}>
                      {combo.items}
                    </p>
                    <Link
                      to="/contact"
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(90deg, #FFD700, #FF6B00)',
                        color: '#0D0D0D',
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '0.9rem',
                        letterSpacing: '0.1em',
                        padding: '8px 22px',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 700,
                      }}
                    >
                      Book This Deal →
                    </Link>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#555', fontSize: '0.85rem', textDecoration: 'line-through' }}>
                      {combo.original}
                    </div>
                    <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.2rem', color: '#FFD700', letterSpacing: '0.05em', lineHeight: 1 }}>
                      {combo.price}
                    </div>
                    <div style={{
                      background: 'rgba(232,0,90,0.15)',
                      border: '1px solid rgba(232,0,90,0.3)',
                      borderRadius: '50px',
                      padding: '2px 10px',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.75rem',
                      color: '#E8005A',
                      marginTop: '4px',
                    }}>
                      {combo.save}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer for mobile */}
      <div className="md:hidden" style={{ height: '64px' }} />
    </div>
  );
}
