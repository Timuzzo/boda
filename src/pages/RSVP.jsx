import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const RSVP = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState(false);
  const [guests, setGuests] = useState(1);
  const [allergies, setAllergies] = useState('');
  const [deadline] = useState('2025-07-15');

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

    const templateParams = {
      name,
      email,
      attending: attending ? 'Yes' : 'No',
      guests,
      allergies,
      deadline,
    };

    emailjs
      .send('service_fj6qu47', 'template_se94038', templateParams, '6YxEVXWyazpRJsFFj') // Replace with your credentials
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          alert('RSVP sent successfully!');
          setName('');
          setEmail('');
          setAttending(false);
          setGuests(1);
          setAllergies('');
        },
        (err) => {
          console.error('Failed...', err);
          alert('Error sending RSVP. Please try again.');
        }
      );
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          RSVP
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Please respond by <span className="font-semibold">{deadline}</span>.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="attending"
              checked={attending}
              onChange={(e) => setAttending(e.target.checked)}
              className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="attending" className="text-sm font-medium text-gray-700">
              Attending
            </label>
          </div>

          {attending && (
            <div className="space-y-4">
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                  Number of Guests
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                    className="w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
                  Allergies/Dietary Restrictions
                </label>
                <div className="mt-1">
                  <textarea
                    id="allergies"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                    placeholder="List any allergies or special food requirements"
                    className="w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}

          <button type="submit" className="w-full bg-blue-600 text-white font-semibold rounded-md shadow-md py-3 px-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Submit RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVP;
