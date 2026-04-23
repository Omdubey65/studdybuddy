import React from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
  { code: 'zh', label: 'Chinese' },
  // Add more languages as needed
];

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="flex flex-col items-center my-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Select Language</h2>
      <div className="flex gap-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`px-5 py-2 rounded-lg transition-colors font-medium ${
              currentLanguage === lang.code
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-green-100'
            }`}
            onClick={() => onLanguageChange(lang.code)}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
