import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Display = () => {
  const [revealed, setRevealed] = useState(false);
  const { t } = useTranslation();

  // Obfuscated IBAN parts
  const parts = ['DE65', '7603', '0080', '0240', '7202', '43'];

  const reveal = () => setRevealed(true);

  return (
    <div>
      {!revealed ? (
        <button
          onClick={reveal}
          className="font-montserrat text-sm text-gray-600 mb-2 underline hover:text-eucalyptus-600 transition-colors"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          {t('registry.revealIban')}
        </button>
      ) : (
        <p className="font-montserrat text-sm text-gray-600 mb-2">
          IBAN: {parts.join(' ')}
        </p>
      )}
    </div>
  );
};

const DisplayAccountNumber = () => {
  const [revealed, setRevealed] = useState(false);
  const { t } = useTranslation();

  // Obfuscated account number parts
  const accountParts = ['3422', '7140', '331'];

  const reveal = () => setRevealed(true);

  return (
    <div>
      {!revealed ? (
        <button
          onClick={reveal}
          className="font-montserrat text-sm text-gray-600 mb-2 underline hover:text-eucalyptus-600 transition-colors"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          {t('registry.revealAccountNumber')}
        </button>
      ) : (
        <p className="font-montserrat text-sm text-gray-600 mb-2">
          {t('registry.accountNumber')}: {accountParts.join(' ')}
        </p>
      )}
    </div>
  );
};

export default Display;
export { DisplayAccountNumber }; 