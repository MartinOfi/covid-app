export interface BannerProps {
  data: {
    confirmed: number;
    recovered: number;
    deaths: number;
  };
  vaccines: {
    administered: number;
    people_vaccinated: number;
    people_partially_vaccinated: number;
  };
}
