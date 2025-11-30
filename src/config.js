import * as custom from './marketplace-custom-config.js';
import defaultLocationSearches from './default-location-searches';
import { defaultMCC, stripePublishableKey, stripeCountryDetails } from './stripe-config';
import { currencyConfiguration } from './currency-config';

const env = process.env.REACT_APP_ENV;
const dev = process.env.REACT_APP_ENV === 'development';

// CDN assets (p. ej. traducciones desde Console / Asset Delivery)
const appCdnAssets = {
  translations: 'content/translations.json',
};



// Idioma/localización (puedes cambiar a 'es' si ya tienes traducciones)
const locale = 'es';
const i18n = {
  firstDayOfWeek: 1, // Lunes
};

// Ordenar resultados por distancia (mantén false por ahora)
const sortSearchByDistance = false;

// ***** PROCESO Y UNIDAD PARA DELIVERY *****
const bookingProcessAlias = 'encorto-purchase/release-1'; // tu proceso custom
const bookingUnitType = 'line-item/units'; // unidades (no noches/días)
const enableAvailability = false; // sin calendario para comida

// Ventana de booking (irrelevante para comida, pero dejamos default)
const dayCountAvailableForBooking = 90;

// Variables de entorno expuestas al cliente
const sdkClientId = process.env.REACT_APP_SHARETRIBE_SDK_CLIENT_ID;
const sdkBaseUrl = process.env.REACT_APP_SHARETRIBE_SDK_BASE_URL;
const sdkAssetCdnBaseUrl = process.env.REACT_APP_SHARETRIBE_SDK_ASSET_CDN_BASE_URL;
const sdkTransitVerbose = process.env.REACT_APP_SHARETRIBE_SDK_TRANSIT_VERBOSE === 'true';

// Moneda del marketplace (viene del .env: REACT_APP_SHARETRIBE_MARKETPLACE_CURRENCY=MXN)
const currencyConf = process.env.REACT_APP_SHARETRIBE_MARKETPLACE_CURRENCY;
const currency = currencyConf ? currencyConf.toUpperCase() : currencyConf;
const currencyConfig = currencyConfiguration(currency);

// Precio mínimo (en subunidades) 0 = sin restricción
const listingMinimumPriceSubUnits = 0;

// Sentry (opcional)
const sentryDsn = process.env.REACT_APP_SENTRY_DSN;

// SSL
const usingSSL = process.env.REACT_APP_SHARETRIBE_USING_SSL === 'true';

// Dirección para SEO (ajustada a MX)
const addressCountry = 'MX';
const addressRegion = 'Coahuila';
const postalCode = '26700';
const streetAddress = 'Nueva Rosita';

// URL canónica (dev)
const canonicalRootURL = process.env.REACT_APP_CANONICAL_ROOT_URL || 'http://localhost:3000';

// Títulos/redes
const siteTitle = dev ? 'EnCorto (TEST)' : 'EnCorto';
const siteTwitterHandle = '@enc     ortoapp';
const siteInstagramPage = null;
const siteFacebookPage = null;

// Social/SSO (si no usas, deja vacío)
const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

const maps = {
  mapboxAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  googleMapsAPIKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

  search: {
    suggestCurrentLocation: process.env.REACT_APP_DEFAULT_SEARCHES_ENABLED === 'true',
    currentLocationBoundsDistance: 1000,
    defaults:
      process.env.REACT_APP_DEFAULT_SEARCHES_ENABLED === 'true' ? defaultLocationSearches : [],
    // countryLimit: ['MX'], // opcional: limitar autocompletado a México
  },

  // Fuzzy off (para mostrar pins reales)
  fuzzy: {
    enabled: false,
    offset: 500,
    defaultZoomLevel: 13,
    circleColor: '#c0392b',
  },

  // Marker custom (opcional)
  customMarker: {
    enabled: false,
    url: encodeURI(`${canonicalRootURL}/static/icons/map-marker-32x32.png`),
    width: 32,
    height: 32,
    anchorX: 16,
    anchorY: 32,
  },
};

// *** IMPORTANTE ***
// Este objeto sólo debe exponer config segura para el cliente
const config = {
  env,
  dev,
  appCdnAssets,
  locale,
  bookingProcessAlias,
  bookingUnitType,
  enableAvailability,
  dayCountAvailableForBooking,
  i18n,
  sdk: {
    clientId: sdkClientId,
    baseUrl: sdkBaseUrl,
    assetCdnBaseUrl: sdkAssetCdnBaseUrl,
    transitVerbose: sdkTransitVerbose,
  },
  sortSearchByDistance,
  currency,
  currencyConfig,
  listingMinimumPriceSubUnits,
  stripe: {
    defaultMCC: defaultMCC,
    publishableKey: stripePublishableKey, // asegúrate que sea pk_test_... en .env
    supportedCountries: stripeCountryDetails,
  },
  canonicalRootURL,
  address: {
    addressCountry,
    addressRegion,
    postalCode,
    streetAddress,
  },
  siteTitle, 
  siteFacebookPage,
  siteInstagramPage,
  siteTwitterHandle,
  facebookAppId,
  sentryDsn,
  usingSSL,
  maps,
  custom,
};

export default config;
