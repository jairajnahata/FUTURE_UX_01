import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle, Scissors, CheckCircle } from 'lucide-react';

const TIME_SLOTS = ['09:00 AM', '10:00 AM', '11:00 PM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'];

const HOURS = [
  { day: 'Monday', time: '9:00 AM – 8:00 PM' },
  { day: 'Tuesday', time: <span style={{color:'#E8005A'}}> Holiday</span> },
  { day: 'Wednesday', time: '9:00 AM – 8:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 8:00 PM' },
  { day: 'Friday', time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 8:00 PM' },
];

const SERVICES_LIST = [
  'Classic Haircut (₹120)',
  'Fade & Taper (₹180)',
  'Beard Shaping (₹100)',
  'Hot Towel Shave (₹150)',
  'Hair Colour (₹350+)',
  'Scalp Massage (₹250)',
  'The Full Groom Pack (₹299)',
  'Student Special (₹219)',
];

export function ContactPage() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) { alert('Please select a time slot!'); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0D0D0D', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px 60px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '480px' }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CheckCircle size={70} style={{ color: '#FF6B00', margin: '0 auto 24px' }} />
          </motion.div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: '2.2rem', color: '#FFF8EE', margin: '0 0 12px' }}>
            Booking Confirmed! ✂️
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
            Thank you, <strong style={{ color: '#FF6B00' }}>{formData.name || 'valued client'}</strong>! Your appointment request for{' '}
            <strong style={{ color: '#FFD700' }}>{selectedSlot}</strong> has been received.
            We'll confirm via WhatsApp within 1 hour. 💬
          </p>
          <button
            onClick={() => { setSubmitted(false); setSelectedSlot(null); setFormData({ name: '', phone: '', service: '', date: '', message: '' }); }}
            style={{
              background: 'linear-gradient(90deg, #FF6B00, #E8005A)',
              color: '#fff',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.1rem',
              letterSpacing: '0.1em',
              padding: '14px 36px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Book Another Slot →
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh' }}>
      <style>{`
        .float-label-group {
          position: relative;
          margin-bottom: 20px;
        }
        .float-label-group input,
        .float-label-group select,
        .float-label-group textarea {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 18px 16px 8px;
          color: #FFF8EE;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.3s, background 0.3s;
          box-sizing: border-box;
          appearance: none;
          -webkit-appearance: none;
        }
        .float-label-group select option {
          background: #1a1a1a;
          color: #FFF8EE;
        }
        .float-label-group textarea {
          resize: vertical;
          min-height: 90px;
        }
        .float-label-group input:focus,
        .float-label-group select:focus,
        .float-label-group textarea:focus {
          border-color: #FF6B00;
          background: rgba(255,107,0,0.05);
        }
        .float-label-group label {
          position: absolute;
          top: 14px;
          left: 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: #666;
          pointer-events: none;
          transition: all 0.25s;
        }
        .float-label-group.active label,
        .float-label-group input:focus + label,
        .float-label-group select:focus + label {
          top: 6px;
          font-size: 0.72rem;
          color: #FF6B00;
          letter-spacing: 0.04em;
        }
        .time-pill {
          padding: 8px 16px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
          color: #aaa;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.25s;
          white-space: nowrap;
        }
        .time-pill:hover {
          border-color: rgba(255,107,0,0.5);
          color: #FF6B00;
          background: rgba(255,107,0,0.07);
        }
        .time-pill.selected {
          background: linear-gradient(90deg, #FF6B00, #E8005A);
          border-color: transparent;
          color: #fff;
          font-weight: 600;
          box-shadow: 0 4px 14px rgba(255,107,0,0.35);
          transform: scale(1.05);
        }
        .submit-btn {
          width: 100%;
          padding: 16px;
          border-radius: 50px;
          border: none;
          background: linear-gradient(90deg, #FF6B00, #E8005A);
          color: #fff;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.15rem;
          letter-spacing: 0.12em;
          cursor: pointer;
          transition: transform 0.25s, box-shadow 0.25s;
          box-shadow: 0 6px 20px rgba(255,107,0,0.3);
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255,107,0,0.45);
        }
        .submit-btn:active { transform: translateY(0); }
      `}</style>

      {/* Page Header */}
      <div style={{ paddingTop: '100px', paddingBottom: '40px', textAlign: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center top, rgba(255,107,0,0.08), transparent 60%)',
          pointerEvents: 'none',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <span style={{ fontFamily: 'Cinzel Decorative, serif', color: '#FFD700', fontSize: '0.65rem', letterSpacing: '0.35em', display: 'block', marginBottom: '12px' }}>
            GET IN TOUCH
          </span>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FFF8EE', letterSpacing: '0.1em', margin: 0 }}>
            CONTACT & BOOKING
          </h1>
          <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #FF6B00, #E8005A)', margin: '14px auto 0', borderRadius: '2px' }} />
        </motion.div>
      </div>

      {/* ── MAIN SPLIT LAYOUT ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ── LEFT PANEL (40%) ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
            style={{
              backgroundColor: '#111',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255,107,0,0.2)',
              borderLeft: '4px solid #FF6B00',
              position: 'relative',
            }}
          >
            {/* Grain texture */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
              opacity: 0.04, pointerEvents: 'none',
            }} />
            <div style={{ padding: '36px 32px', position: 'relative', zIndex: 1 }}>
              {/* Logo & Name */}
              <div className="flex items-center gap-3 mb-6">
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FF6B00, #E8005A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Scissors size={22} style={{ color: '#fff' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: '1.1rem', color: '#FFF8EE', lineHeight: 1 }}>Sri Sai</div>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFD700', fontSize: '0.6rem', letterSpacing: '0.25em' }}>MEN'S HAIR SALOON</div>
                </div>
              </div>

              <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#FFF8EE', lineHeight: 1.2, margin: '0 0 24px' }}>
                Visit Us &<br />
                <span style={{ background: 'linear-gradient(90deg, #FF6B00, #E8005A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Book a Slot</span>
              </h2>

              {/* Address */}
              <div className="flex items-start gap-3 mb-5">
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={16} style={{ color: '#FF6B00' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#FFF8EE', fontSize: '0.88rem', marginBottom: '2px' }}>Our Location</div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#777', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    Near Hanuman Temple,<br />Main Road, Your City – 500001
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 mb-5">
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={16} style={{ color: '#FF6B00' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#FFF8EE', fontSize: '0.88rem', marginBottom: '4px' }}>Call / WhatsApp</div>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)',
                      borderRadius: '8px', padding: '6px 14px',
                      fontFamily: 'DM Sans, sans-serif', color: '#25D366', fontSize: '0.82rem',
                      textDecoration: 'none', transition: 'all 0.3s',
                    }}
                  >
                    <MessageCircle size={14} />
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3 mb-6">
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={16} style={{ color: '#FF6B00' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#FFF8EE', fontSize: '0.88rem', marginBottom: '8px' }}>Opening Hours</div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      {HOURS.map(h => (
                        <tr key={h.day}>
                          <td style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.78rem', paddingBottom: '4px', paddingRight: '12px' }}>{h.day}</td>
                          <td style={{ fontFamily: 'DM Sans, sans-serif', color: '#FFD700', fontSize: '0.78rem', paddingBottom: '4px', fontWeight: 600 }}>{h.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '2px solid rgba(26,59,204,0.4)',
                boxShadow: '0 0 20px rgba(26,59,204,0.2)',
                height: '180px',
                background: 'linear-gradient(135deg, #0a0f2e, #0d0d0d)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}>
                <MapPin size={28} style={{ color: '#FF6B00' }} />
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFF8EE', fontSize: '1.1rem', letterSpacing: '0.1em' }}>GOOGLE MAPS</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#555', fontSize: '0.75rem' }}>Near Hanuman Temple, Main Road</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: '4px',
                    background: 'rgba(26,59,204,0.3)',
                    border: '1px solid rgba(26,59,204,0.5)',
                    borderRadius: '50px',
                    padding: '5px 16px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.75rem',
                    color: '#6b8ef5',
                    textDecoration: 'none',
                  }}
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT PANEL (60%) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
            style={{
              backgroundColor: '#FFF8EE',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '36px 36px 40px' }}>
              <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#FF6B00', letterSpacing: '0.1em', margin: '0 0 6px' }}>
                Book Your Appointment
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.88rem', margin: '0 0 28px', lineHeight: 1.5 }}>
                Fill in your details and we'll confirm your slot via WhatsApp.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="float-label-group">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder=" "
                    style={{ backgroundColor: '#f5ede0' }}
                  />
                  <label htmlFor="name" style={{ color: formData.name || focused === 'name' ? '#FF6B00' : '#888', top: formData.name || focused === 'name' ? '6px' : '14px', fontSize: formData.name || focused === 'name' ? '0.72rem' : '0.88rem' }}>
                    Full Name *
                  </label>
                </div>

                {/* Phone */}
                <div className="float-label-group">
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder=" "
                    style={{ backgroundColor: '#f5ede0' }}
                  />
                  <label htmlFor="phone" style={{ color: formData.phone || focused === 'phone' ? '#FF6B00' : '#888', top: formData.phone || focused === 'phone' ? '6px' : '14px', fontSize: formData.phone || focused === 'phone' ? '0.72rem' : '0.88rem' }}>
                    Phone Number *
                  </label>
                </div>

                {/* Service Dropdown */}
                <div style={{ marginBottom: '20px', position: 'relative' }}>
                  <label style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#FF6B00', letterSpacing: '0.04em', marginBottom: '6px' }}>
                    SELECT SERVICE *
                  </label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,107,0,0.3)',
                      backgroundColor: '#f5ede0',
                      color: formData.service ? '#0D0D0D' : '#888',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.92rem',
                      outline: 'none',
                      cursor: 'pointer',
                      appearance: 'none',
                    }}
                  >
                    <option value="">Choose a service...</option>
                    {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div style={{ position: 'absolute', right: '14px', top: '38px', color: '#FF6B00', pointerEvents: 'none' }}>▼</div>
                </div>

                {/* Date */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#FF6B00', letterSpacing: '0.04em', marginBottom: '6px' }}>
                    SELECT DATE *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,107,0,0.3)',
                      backgroundColor: '#f5ede0',
                      color: '#0D0D0D',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Time Slots */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#FF6B00', letterSpacing: '0.04em', marginBottom: '10px' }}>
                    SELECT TIME SLOT *
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {TIME_SLOTS.map(slot => (
                      <motion.button
                        key={slot}
                        type="button"
                        className={`time-pill ${selectedSlot === slot ? 'selected' : ''}`}
                        onClick={() => setSelectedSlot(slot)}
                        whileTap={{ scale: 0.95 }}
                        animate={selectedSlot === slot ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                        transition={{ duration: 0.25 }}
                      >
                        {slot}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#888', letterSpacing: '0.04em', marginBottom: '6px' }}>
                    ADDITIONAL MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any special requests or preferences..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,107,0,0.2)',
                      backgroundColor: '#f5ede0',
                      color: '#0D0D0D',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical',
                      minHeight: '80px',
                      boxSizing: 'border-box',
                      lineHeight: 1.6,
                    }}
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="submit-btn">
                  Confirm Booking ✂️
                </button>

                {/* Trust note */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <MessageCircle size={14} style={{ color: '#25D366' }} />
                  <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.8rem', margin: 0 }}>
                    We'll confirm via <strong style={{ color: '#25D366' }}>WhatsApp</strong> within 1 hour.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Spacer for mobile */}
      <div className="md:hidden" style={{ height: '64px' }} />
    </div>
  );
}
