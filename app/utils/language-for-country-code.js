/*
  Given an ISO-3166-1 country code, this utility method returns
  the assumed language code
*/
export default function languageForCountryCode(countryCode) {
  switch(countryCode.toLowerCase()) {
    case 'es':
    case 'mx':
      return 'es';
    case 'gb':
    case 'us':
      return 'en';
    default:
      return 'en';
  }
}
