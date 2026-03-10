import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-coffee-50)] flex flex-col selection:bg-[var(--color-accent)] selection:text-white">
      {/* Simple Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-coffee-50)]/90 backdrop-blur-md border-b border-[var(--color-coffee-900)]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight flex items-center gap-2">
            Lumière <span className="text-[var(--color-accent)]">.</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm font-medium hover:text-[var(--color-accent)] transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      {/* Booking Form Section */}
      <div className="flex-1 pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto w-full flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-[var(--color-coffee-900)]/5 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-[var(--color-accent)]" />
                </div>
                <h2 className="text-4xl font-serif mb-4">Table Reserved!</h2>
                <p className="text-[var(--color-coffee-800)]/70 mb-8 max-w-sm mx-auto">
                  We've sent a confirmation to your email. We look forward to hosting you at Lumière.
                </p>
                <Link to="/" className="inline-flex items-center justify-center bg-[var(--color-coffee-900)] text-[var(--color-coffee-50)] px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[var(--color-coffee-800)] transition-colors">
                  Return to Home
                </Link>
              </motion.div>
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl font-serif mb-2">Reserve your table</h1>
                <p className="text-[var(--color-coffee-800)]/70 mb-10">Join us for an unforgettable culinary experience.</p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[var(--color-coffee-900)]">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-coffee-800)]/50" size={20} />
                        <input type="date" required className="w-full bg-[var(--color-coffee-50)] border border-[var(--color-coffee-900)]/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[var(--color-coffee-900)]">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-coffee-800)]/50" size={20} />
                        <select required className="w-full bg-[var(--color-coffee-50)] border border-[var(--color-coffee-900)]/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all appearance-none">
                          <option value="">Select a time</option>
                          <option value="08:00">08:00 AM</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">01:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-coffee-900)]">Party Size</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-coffee-800)]/50" size={20} />
                      <select required className="w-full bg-[var(--color-coffee-50)] border border-[var(--color-coffee-900)]/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all appearance-none">
                        <option value="">Number of guests</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-coffee-900)]">Special Requests (Optional)</label>
                    <textarea rows={3} className="w-full bg-[var(--color-coffee-50)] border border-[var(--color-coffee-900)]/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-none" placeholder="Any dietary requirements or special occasions?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[var(--color-coffee-900)] text-[var(--color-coffee-50)] py-4 rounded-xl font-medium tracking-wide hover:bg-[var(--color-coffee-800)] transition-colors mt-4">
                    Confirm Reservation
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
