import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Graphic from "../../Components/Graphic/Container";
import { ContryDetails } from "../../Layouts/Main/models";

const DetailsPage = (props) => {
  const [data, setData] = useState<ContryDetails>({
    countryData: {},
    confirmed: {},
    deaths: {},
    recovered: {},
  });
  const { country } = useParams();
  const { CountriesStore } = props;

  useEffect(() => {
    CountriesStore.getCountryDetails(country);
  }, []);
  useEffect(() => {
    if (CountriesStore.countryDetails.countryData?.All) {
      const { countryData, confirmed, deaths, recovered } =
        CountriesStore.countryDetails;
      setData({
        countryData: countryData,
        confirmed: confirmed,
        deaths: deaths,
        recovered: recovered,
      });
    }
  }, [CountriesStore.countryDetails.countryData]);

  if (!data.countryData?.All) {
    return <h1>Loading...</h1>;
  }
  console.log(data);

  return (
    <div className="m-6 box">
      <h1 className="is-size-1 box">
        <strong>{data.countryData.All.country}</strong>
      </h1>
      <section className=" box">
        <h2 className="is-size-2">Datos del pais</h2>
        <div className="is-flex">
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
          <div className="ml-5">
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
        </div>
      </section>
      <section className="box">
        <h2 className="is-size-2">
          Grafica de casos confirmados, recuperados y muertes
        </h2>
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
