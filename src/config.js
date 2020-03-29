const weatherConfig = {
  OW_KEY: '7800a9dc9c8871b043f0652c468ba53e',
  OW_URL: 'https://api.openweathermap.org/data/2.5/weather?',
  OW_CITY_ID: '2158177',
  OW_UNITS: 'metric',
}

const covidConfig = {
  URL: 'https://corona.lmao.ninja/countries/',
  COUNTRY: 'australia',
  CSSE_BASE:
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/',
  CSSE_KEY: 'Victoria, Australia',
}

export { weatherConfig, covidConfig }
