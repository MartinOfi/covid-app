export interface CountryData {
  All?: {
    confirmed: number;
    recovered: number;
    deaths: 8629;
    country: string;
    dates:object;
    population: number;
    sq_km_area: number;
    life_expectancy: string;
    elevation_in_meters: string;
    continent: string;
    abbreviation: string;
    location: string;
    iso: number;
    capital_city: string;
    lat: string;
    long: string;
    updated: string;
  };
  [otherOptions: string]: unknown;
}

export interface ContryDetails {
  countryData: CountryData ;
  confirmed: CountryData;
  recovered: CountryData;
  deaths: CountryData;
}