import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const RSVP = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(1);
  const [allergies, setAllergies] = useState('');
  const [deadline] = useState('2026-07-15');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert('Please fill in your name and email.');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    if (today > deadline) {
        alert(`RSVP deadline was ${deadline}.  Please contact the couple directly.`);
        return;
    }

    setLoading(true);

    const templateParams = {
      name,
      email,
      guests,
      allergies,
      deadline,
    };

    emailjs
      .send('service_fj6qu47', 'template_se94038', templateParams, '6YxEVXWyazpRJsFFj')
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          alert('RSVP sent successfully!');
          setName('');
          setEmail('');
          setGuests(1);
          setAllergies('');
          setLoading(false);
        },
        (err) => {
          console.error('Failed...', err);
          alert('Error sending RSVP. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle mb-3 text-hortensia-600">{t("rsvp.joinUs")}</span>
            <h1 className="section-title mb-8 text-eucalyptus-600">RSVP</h1>
            <p className="font-montserrat text-gray-600 leading-relaxed text-lg mb-8">
              {t("rsvp.rsvpByDate", { date: deadline })}
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="pb-10">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label uppercase tracking-wider text-xs mb-2 text-hortensia-600">
                  {t("rsvp.fullName")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("rsvp.fullName")}
                  required
                  className="form-input border-0 border-b-2 border-hortensia-200 rounded-none px-0 py-1 focus:border-eucalyptus-600 focus:ring-0 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label uppercase tracking-wider text-xs mb-2 text-hortensia-600">
                  {t("rsvp.emailAddress")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("rsvp.emailAddress")}
                  required
                  className="form-input border-0 border-b-2 border-hortensia-200 rounded-none px-0 py-1 focus:border-eucalyptus-600 focus:ring-0 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="guests" className="form-label uppercase tracking-wider text-xs mb-2 text-hortensia-600">
                  {t("rsvp.numberOfGuests")}
                </label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                  className="form-input border-0 border-b-2 border-hortensia-200 rounded-none px-0 py-1 focus:border-eucalyptus-600 focus:ring-0 text-gray-700 bg-white"
                >
                  <option value="1">{t("rsvp.justMe")}</option>
                  <option value="2">{t("rsvp.meAndGuest")}</option>
                </select>
              </div>

              <div>
                <label htmlFor="allergies" className="form-label uppercase tracking-wider text-xs mb-2 text-hortensia-600">
                  {t("rsvp.dietaryRestrictions")}
                </label>
                <textarea
                  id="allergies"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                  placeholder={t("rsvp.dietaryPlaceholder")}
                  className="form-input border-0 border-b-2 border-hortensia-200 rounded-none px-0 py-1 focus:border-eucalyptus-600 focus:ring-0 text-gray-700 placeholder-gray-400 min-h-[50px]"
                  rows={4}
                />
              </div>

              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  className="btn-primary bg-eucalyptus-600 hover:bg-eucalyptus-700 text-white px-8 py-3 rounded-full transition-colors duration-300"
                  disabled={loading}
                >
                  {loading ? t("rsvp.submitting") || "Submitting..." : t("rsvp.submitRSVP")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSVP;
