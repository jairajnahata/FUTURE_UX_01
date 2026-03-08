import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  Scissors, Star, Award, Users, ShieldCheck, Clock, ChevronLeft, ChevronRight, Quote
} from 'lucide-react';

/* ── IMAGES ── */
const IMG_HAIRCUT = 'https://images.unsplash.com/photo-1706769015484-248bd241945c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600';
const IMG_BEARD   = 'https://images.unsplash.com/photo-1733995471058-3d6ff2013de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600';
const IMG_SCALP   = 'https://images.unsplash.com/photo-1722351153083-e32ff83a0c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600';
const IMG_HERO_BG = 'https://images.unsplash.com/photo-1546641082-f149d4c3c907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400';

/* ── DATA ── */
const SERVICES_TEASER = [
  { title: 'Classic Haircut', icon: <Scissors size={20} />, price: '₹120', img: IMG_HAIRCUT, desc: 'Timeless precision cuts tailored to your face shape.' },
  { title: 'Beard Styling', icon: <span style={{ fontSize: '1.1rem' }}>🧔</span>, price: '₹100', img: IMG_BEARD, desc: 'Expert beard shaping, trimming & conditioning.' },
  { title: 'Hair Treatment', icon: <span style={{ fontSize: '1.1rem' }}>💆</span>, price: '₹250', img: IMG_SCALP, desc: 'Relaxing scalp massage & nourishing treatment.' },
];

const WHY_ITEMS = [
  { icon: <Users size={22} />, title: 'Expert Barbers', desc: 'Trained professionals with 8+ years of craftsmanship.' },
  { icon: <ShieldCheck size={22} />, title: 'Hygienic Tools', desc: 'Sterilised equipment for every single client, always.' },
  { icon: <Clock size={22} />, title: 'Walk-in Welcome', desc: "No appointment needed — drop in anytime we're open." },
  { icon: <span style={{ fontSize: '1.1rem' }}>₹</span>, title: 'Affordable Pricing', desc: 'Premium quality at prices that respect your budget.' },
];

const TESTIMONIALS = [
  { name: 'Rahul K.', role: 'Regular Client · 3 years', review: "Best haircut I've ever had! The barbers here truly understand what you want. The ambiance is top-notch and the service is always consistent.", rating: 5 },
  { name: 'Aditya M.', role: 'Walk-in Customer', review: "Walked in without an appointment and still got served promptly. My beard has never looked better. Highly recommend the hot towel shave!", rating: 5 },
  { name: 'Suresh P.', role: 'Regular Client · 2 years', review: "Affordable pricing with premium quality — it's the real deal. The scalp massage is absolutely heavenly. This is my go-to saloon now.", rating: 5 },
];

const MARQUEE_ITEMS = [
  '⭐ 500+ Happy Clients',
  '✂️ 8 Years of Excellence',
  '📍 Hyderabad, India',
  '🏆 Best Saloon Award 2024',
  '💈 Walk-ins Always Welcome',
  '🧔 Expert Barbers',
];

/* ── SUB-COMPONENTS ── */

function HeroScissorsIllustration() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: '100%', maxWidth: '520px', minHeight: '360px' }}
    >
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,0,0.18) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: '360px', height: '360px', borderRadius: '50%', border: '1px dashed rgba(255,215,0,0.25)' }}
      />
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <svg width="300" height="300" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="40" stroke="#FF6B00" strokeWidth="8" fill="rgba(255,107,0,0.1)" />
          <circle cx="240" cy="80" r="40" stroke="#FFD700" strokeWidth="8" fill="rgba(255,215,0,0.1)" />
          <line x1="110" y1="60" x2="175" y2="160" stroke="#FF6B00" strokeWidth="10" strokeLinecap="round" />
          <line x1="70" y1="100" x2="175" y2="160" stroke="#FF6B00" strokeWidth="10" strokeLinecap="round" />
          <line x1="210" y1="60" x2="175" y2="160" stroke="#FFD700" strokeWidth="10" strokeLinecap="round" />
          <line x1="250" y1="100" x2="175" y2="160" stroke="#FFD700" strokeWidth="10" strokeLinecap="round" />
          <circle cx="175" cy="160" r="12" fill="#FFD700" />
          <circle cx="175" cy="160" r="6" fill="#FF6B00" />
          <path d="M170 172 Q155 230 140 270" stroke="#FF6B00" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M180 172 Q195 230 210 270" stroke="#FFD700" strokeWidth="8" strokeLinecap="round" fill="none" />
          <rect x="80" y="210" width="100" height="18" rx="6" fill="rgba(255,215,0,0.8)" />
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <rect key={i} x={85 + i * 11} y="228" width="5" height="28" rx="2.5" fill="rgba(255,215,0,0.7)" />
          ))}
          <circle cx="50" cy="200" r="3" fill="#E8005A" />
          <circle cx="280" cy="150" r="4" fill="#FFD700" />
          <circle cx="60" cy="280" r="2.5" fill="#FF6B00" />
          <circle cx="295" cy="220" r="3" fill="#E8005A" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: '20px', right: '10px', background: 'linear-gradient(135deg, #FF6B00, #E8005A)', borderRadius: '12px', padding: '10px 16px', zIndex: 10 }}
      >
        <div style={{ fontFamily: 'Cinzel Decorative, serif', color: '#fff', fontSize: '0.6rem', letterSpacing: '0.08em' }}>SINCE 2016</div>
        <div style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFD700', fontSize: '1.2rem', letterSpacing: '0.05em' }}>8 YEARS</div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{ position: 'absolute', top: '30px', left: '0px', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.4)', borderRadius: '10px', padding: '8px 14px', zIndex: 10 }}
      >
        <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#FFD700', fontSize: '0.75rem' }}> 4.9 Rating</div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#aaa', fontSize: '0.65rem' }}>500+ Reviews</div>
      </motion.div>
    </motion.div>
  );
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marqueeScroll 22s linear infinite;
          display: flex;
          white-space: nowrap;
          width: max-content;
        }
      `}</style>
      <div style={{ backgroundColor: '#FFD700', overflow: 'hidden', padding: '10px 0' }}>
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={i} style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', letterSpacing: '0.12em', color: '#0D0D0D', padding: '0 32px' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES_TEASER[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        backgroundColor: '#141414',
        borderRadius: '16px',
        overflow: 'hidden',
        border: hovered ? '1px solid #FF6B00' : '1px solid rgba(255,255,255,0.08)',
        boxShadow: hovered ? '0 0 30px rgba(255,107,0,0.25)' : '0 4px 20px rgba(0,0,0,0.4)',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
        <motion.img
          src={service.img}
          alt={service.title}
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,13,0.7), transparent)' }} />
        <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '8px', padding: '4px 10px', fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', color: '#FFFFFF', letterSpacing: '0.05em' }}>
          {service.price}
        </div>
      </div>
      <div style={{ padding: '16px 20px 20px' }}>
        <div className="flex items-center gap-2 mb-2">
          <span style={{ color: '#FF6B00' }}>{service.icon}</span>
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', color: '#FFF8EE', letterSpacing: '0.08em', margin: 0 }}>
            {service.title}
          </h3>
        </div>
        <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(timer);
  }, [auto]);

  const prev = () => { setAuto(false); setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); };
  const next = () => { setAuto(false); setCurrent(c => (c + 1) % TESTIMONIALS.length); };

  return (
    <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,215,0,0.2)', borderRadius: '20px', padding: '36px 40px' }}
        >
          <Quote size={36} style={{ color: '#FFD700', opacity: 0.6, marginBottom: '16px' }} />
          <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#DDD', fontSize: '1rem', lineHeight: 1.75, fontStyle: 'italic', margin: '0 0 20px' }}>
            "{TESTIMONIALS[current].review}"
          </p>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div style={{ fontFamily: 'Playfair Display, serif', color: '#FFF8EE', fontWeight: 700, fontSize: '1rem' }}>{TESTIMONIALS[current].name}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#666', fontSize: '0.8rem' }}>{TESTIMONIALS[current].role}</div>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                <Star key={i} size={14} fill="#FFD700" style={{ color: '#FFD700' }} />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={prev} style={{ background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.3)', borderRadius: '50%', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00', cursor: 'pointer' }}>
          <ChevronLeft size={18} />
        </button>
        {TESTIMONIALS.map((_, i) => (
          <button key={i} onClick={() => { setAuto(false); setCurrent(i); }} style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px', backgroundColor: i === current ? '#FF6B00' : 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }} />
        ))}
        <button onClick={next} style={{ background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.3)', borderRadius: '50%', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00', cursor: 'pointer' }}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

/* ── MAIN PAGE ── */
export function HomePage() {
  const words = ["Your Style.", "Your Pride.", "Perfectly Crafted."];

  return (
    <div style={{ backgroundColor: '#0D0D0D' }}>
      <style>{`
        .btn-saffron {
          position: relative; overflow: hidden; background: #FF6B00; color: #fff;
          font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.12em; font-size: 1.05rem;
          padding: 14px 32px; border-radius: 50px; border: none; cursor: pointer;
          text-decoration: none; display: inline-block; transition: transform 0.2s, box-shadow 0.3s; z-index: 1;
        }
        .btn-saffron::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, #E8005A, #FF6B00); transition: left 0.4s ease; z-index: -1; }
        .btn-saffron:hover::before { left: 0; }
        .btn-saffron:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255,107,0,0.4); }
        .btn-outline {
          position: relative; overflow: hidden; background: transparent; color: #FFF8EE;
          font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.12em; font-size: 1.05rem;
          padding: 13px 32px; border-radius: 50px; border: 2px solid #1A3BCC;
          cursor: pointer; text-decoration: none; display: inline-block; transition: all 0.35s;
        }
        .btn-outline::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: #1A3BCC; transition: left 0.4s ease; z-index: -1; }
        .btn-outline:hover::before { left: 0; }
        .btn-outline:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(26,59,204,0.4); }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={IMG_HERO_BG} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
        </div>
        <motion.div
          animate={{ background: [
            'radial-gradient(ellipse at 15% 50%, rgba(255,107,0,0.2) 0%, transparent 55%), radial-gradient(ellipse at 85% 45%, rgba(26,59,204,0.2) 0%, transparent 55%), radial-gradient(ellipse at 50% 10%, rgba(232,0,90,0.15) 0%, transparent 45%)',
            'radial-gradient(ellipse at 25% 60%, rgba(255,107,0,0.25) 0%, transparent 55%), radial-gradient(ellipse at 75% 35%, rgba(26,59,204,0.22) 0%, transparent 55%), radial-gradient(ellipse at 55% 20%, rgba(232,0,90,0.18) 0%, transparent 45%)',
            'radial-gradient(ellipse at 15% 50%, rgba(255,107,0,0.2) 0%, transparent 55%), radial-gradient(ellipse at 85% 45%, rgba(26,59,204,0.2) 0%, transparent 55%), radial-gradient(ellipse at 50% 10%, rgba(232,0,90,0.15) 0%, transparent 45%)',
          ] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, opacity: 0.04, pointerEvents: 'none' }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full" style={{ paddingTop: '100px', paddingBottom: '60px', position: 'relative', zIndex: 1 }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ fontFamily: 'Cinzel Decorative, serif', color: '#FFD700', fontSize: '0.7rem', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
                ✦ Premium Men's Grooming ✦
              </motion.span>
              <h1 style={{ margin: 0 }}>
                {words.map((line, idx) => (
                  <div key={idx} style={{ overflow: 'hidden', display: 'block' }}>
                    <motion.div
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 + idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        fontFamily: 'Playfair Display, serif', fontWeight: 900,
                        fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', lineHeight: 1.1,
                        background: idx === 2 ? 'linear-gradient(90deg, #FF6B00, #E8005A)' : 'none',
                        WebkitBackgroundClip: idx === 2 ? 'text' : 'unset',
                        WebkitTextFillColor: idx === 2 ? 'transparent' : '#FFF8EE',
                        color: idx === 2 ? 'transparent' : '#FFF8EE',
                        display: 'block', marginBottom: '4px',
                      }}
                    >
                      {line}
                    </motion.div>
                  </div>
                ))}
              </h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} style={{ fontFamily: 'DM Sans, sans-serif', color: '#aaa', fontSize: '1.05rem', lineHeight: 1.7, marginTop: '20px', marginBottom: '36px', maxWidth: '420px' }}>
                Premium Men's Haircuts & Grooming. Walk in, walk out confident — every single time.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-saffron">Book Appointment ✂️</Link>
                <Link to="/services" className="btn-outline">View Services →</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
                {[['500+', 'Happy Clients'], ['8 Yrs', 'Experience'], ['4.9', 'Rating']].map(([val, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.6rem', color: '#FF6B00', letterSpacing: '0.05em', lineHeight: 1 }}>{val}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#666', letterSpacing: '0.05em' }}>{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Right */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="flex-1 flex justify-center">
              <HeroScissorsIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── SERVICES TEASER ── */}
      <section style={{ padding: '90px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span style={{ fontFamily: 'Cinzel Decorative, serif', color: '#FFD700', fontSize: '0.65rem', letterSpacing: '0.3em', display: 'block', marginBottom: '10px' }}>WHAT WE OFFER</span>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#FFF8EE', letterSpacing: '0.08em', margin: 0 }}>OUR SIGNATURE SERVICES</h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #FF6B00, #E8005A)', margin: '14px auto 0', borderRadius: '2px' }} />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_TEASER.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center mt-10">
            <Link to="/services" className="btn-outline">View All Services →</Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: '0 0 90px' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #E8005A 100%)', padding: '60px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.06) 20px, rgba(255,255,255,0.06) 40px)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontFamily: 'Cinzel Decorative, serif', color: 'rgba(255,255,255,0.6)', fontSize: '0.6rem', letterSpacing: '0.25em', display: 'block', marginBottom: '14px' }}>WHY SRI SAI?</span>
                <Quote size={40} style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }} />
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', lineHeight: 1.2, margin: '0 0 20px' }}>Where Every Cut Tells a Story</h2>
                <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 28px' }}>We don't just cut hair — we craft identities. With skilled hands, premium products, and genuine care, we make every visit unforgettable.</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.15)', borderRadius: '8px', padding: '8px 16px' }}>
                  <Award size={16} style={{ color: '#FFD700' }} />
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFD700', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Best Saloon Award 2024</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              style={{ backgroundColor: '#141414', padding: '60px 44px' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {WHY_ITEMS.map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} style={{ padding: '20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(255,107,0,0.2), rgba(232,0,90,0.1))', border: '1px solid rgba(255,107,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00', marginBottom: '12px' }}>
                      {item.icon}
                    </div>
                    <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', color: '#FFF8EE', letterSpacing: '0.08em', margin: '0 0 6px' }}>{item.title}</h4>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#777', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '90px 0', position: 'relative', overflow: 'hidden', backgroundColor: '#111' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,107,0,0.04) 40px, rgba(255,107,0,0.04) 80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, opacity: 0.04, pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-8" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span style={{ fontFamily: 'Cinzel Decorative, serif', color: '#FFD700', fontSize: '0.65rem', letterSpacing: '0.3em', display: 'block', marginBottom: '10px' }}>WHAT OUR CLIENTS SAY</span>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#FFF8EE', letterSpacing: '0.08em', margin: 0 }}>CLIENT TESTIMONIALS</h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #FF6B00, #E8005A)', margin: '14px auto 0', borderRadius: '2px' }} />
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #E8005A 100%)', padding: '80px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ fontFamily: 'Cinzel Decorative, serif', color: 'rgba(255,255,255,0.7)', fontSize: '0.65rem', letterSpacing: '0.3em', display: 'block', marginBottom: '12px' }}>LIMITED SLOTS DAILY</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', margin: '0 0 16px', lineHeight: 1.2 }}>Ready for a Fresh Look?</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.6 }}>Book your slot now and walk out looking your absolute best.</p>
          <Link
            to="/contact"
            style={{ display: 'inline-block', background: '#fff', color: '#FF6B00', fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.12em', padding: '16px 44px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 35px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
          >
            Book Your Slot Now →
          </Link>
        </div>
      </motion.section>

      <div className="md:hidden" style={{ height: '64px' }} />
    </div>
  );
}
