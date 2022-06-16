import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Graphic from "../../Components/Graphic/Container";
import { ContryDetails } from "../../Layouts/Main/models";
import Spinner from "../../Components/Spinner";

const DetailsPage = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ContryDetails>({
    countryData: {},
    confirmed: {},
    deaths: {},
    recovered: {},
    vaccines: {},
  });
  const { country } = useParams();
  const { CountriesStore } = props;

  useEffect(() => {
    CountriesStore.getCountryDetails(country);
  }, []);
  useEffect(() => {
    if (CountriesStore.countryDetails.countryData?.All) {
      const { countryData, confirmed, deaths, recovered, vaccines } =
        CountriesStore.countryDetails;
      setData({
        countryData: countryData,
        confirmed: confirmed,
        deaths: deaths,
        recovered: recovered,
        vaccines: vaccines,
      });
      setLoading(false);
    }
  }, [CountriesStore.countryDetails.countryData]);

  if (loading) {
    return (
      <div className="mt-6 has-text-centered">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="m-6 box">
      <h1 className="is-size-1 box">
        <strong>{data.countryData.All.country}</strong>
      </h1>
      <section className=" box">
        <h2 className="is-size-2">Datos del pais</h2>
        <div className="grid-responsive">
          <div>
            <p className="is-size-5">
              <strong>Capital: </strong>
              {data.countryData.All.capital_city}
            </p>
            <p className="is-size-5">
              <strong>Poblacion: </strong>
              {data.countryData.All.population}
            </p>
            <p className="is-size-5">
              <strong>Expectativa de vida: </strong>
              {data.countryData.All.life_expectancy}
            </p>
          </div>
          <div className="">
            <p className="is-size-5">
              <strong>Continente: </strong>
              {data.countryData.All.continent}
            </p>
            <p className="is-size-5">
              <strong>Ubicacion: </strong>
              {data.countryData.All.location}
            </p>
            <p className="is-size-5">
              <strong>Superficie: </strong>
              {data.countryData.All.sq_km_area} km
            </p>
          </div>
          <div className="">
            <p className="is-size-5">
              <strong>Casos confirmados: </strong>
              {data.countryData.All.confirmed}
            </p>
            <p className="is-size-5">
              <strong>Casos recuperados: </strong>
              {data.countryData.All.recovered}
            </p>
            <p className="is-size-5">
              <strong>Total de fallecidos: </strong>
              {data.countryData.All.deaths}
            </p>
          </div>
          <div className="">
            <p className="is-size-5">
              <strong>Casos cada 100.000 habitantes: </strong>
              {Math.trunc(
                (data.countryData.All.confirmed * 100000) /
                  data.countryData.All.population
              )}
            </p>
            <p className="is-size-5">
              <strong>Porcentaje de vacunados: </strong>
              {Math.trunc(
                (data.vaccines.All.people_vaccinated /
                  data.countryData.All.population) *
                  100
              )}
              %
            </p>

            <p className="is-size-5">
              <strong>Vacunados completos: </strong>
              {data.vaccines.All.people_vaccinated}
            </p>
          </div>
          <div className="">
            <p className="is-size-5">
              <strong>Vacunados parcialmente: </strong>
              {data.vaccines.All.people_partially_vaccinated}
            </p>
            <p className="is-size-5">
              <strong>Vacunas administradas: </strong>
              {data.vaccines.All.administered}
            </p>
          </div>
        </div>
      </section>
      <section className="box">
        <h2 className="is-size-2">Grafica del dia a dia</h2>
        <Graphic
          confirmed={data.confirmed.All.dates}
          deaths={data.deaths.All.dates}
          recovered={data.recovered.All.dates}
        />
      </section>
    </div>
  );
};
export default inject("CountriesStore")(observer(DetailsPage));
