export interface CountryData {
  Global?: {
    confirmed: number;
    deaths: number;
    population: number;
    recovered: number;
  };
  All?: {
    confirmed: number;
    recovered: number;
    deaths: number;
    country: string;
    dates?: object;
    population: number;
    sq_km_area: number;
    life_expectancy: string;
    elevation_in_meters: string;
    continent: string;
    abbreviation: string;
    location: string;
    iso: number;
    capital_city: string;
    lat?: string;
    long?: string;
    updated: string;
    administered?: number;
    people_partially_vaccinated?: number;
    people_vaccinated?: number;
  };
  [otherOptions: string]: unknown;
}
export interface GlobalData {
  countries?: CountryData[];
  Global?: {
    All?: {
      population: number;
      administered: number;
      people_vaccinated: number;
      people_partially_vaccinated: number;
    };
  };
}
export interface ContryDetails {
  countryData: CountryData;
  confirmed: CountryData;
  recovered: CountryData;
  deaths: CountryData;
  vaccines: CountryData;
}
