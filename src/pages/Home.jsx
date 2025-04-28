import React from 'react';
import { useTranslation } from 'react-i18next';
import Countdown from '../components/Countdown'; // Assuming Countdown is in a relative path

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-script text-gray-800 mb-4 sm:mb-6">
          {t('home.welcome')}
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-700 mb-2 sm:mb-4">
          {t('home.names')}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10">
          {t('home.date')}
        </p>
        <div className="mb-12">
          <Countdown />
        </div>
        <p className="text-md sm:text-lg text-gray-700">
            {/* You can add more text here, like a welcome message. */}
            {t('home.welcome_message')}
        </p>
      </div>
    </div>
  );
};

export default Home;
