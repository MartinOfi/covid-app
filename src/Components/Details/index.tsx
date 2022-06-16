import { Button } from "antd";
import { Link } from "react-router-dom";
import Graphic from "../Graphic/Container";

const DetailsComponent = ({
  countryData,
  vaccines,
  confirmed,
  deaths,
  recovered,
}) => {
  return (
    <div className="m-6 box" id="details-page">
       <title>Detalles de {countryData.All.country}</title>
      <div className="is-flex is-justify-content-space-between align-items ">
        <h1 className="is-size-1  w-100percent">
          <strong>{countryData.All.country}</strong>
        </h1>
        <Link to={"/"}>
          <Button size="large">Regresar</Button>
        </Link>
      </div>
      <section className=" box">
        <h2 className="is-size-2">Datos del pais</h2>
        <div className="grid-responsive">
          <div>
            <p className="is-size-5">
              <strong>Capital: </strong>
              {countryData.All.capital_city}
            </p>
            <p className="is-size-5">
              <strong>Poblacion: </strong>
              {countryData.All.population}
            </p>
            <p className="is-size-5">
              <strong>Expectativa de vida: </strong>
              {countryData.All.life_expectancy}
            </p>
          </div>
          <div className="">
            <p className="is-size-5">
              <strong>Continente: </strong>
              {countryData.All.continent}
            </p>
            <p className="is-size-5">
              <strong>Ubicacion: </strong>
              {countryData.All.location}
            </p>
            <p className="is-size-5">
              <strong>Superficie: </strong>
              {countryData.All.sq_km_area} km
            </p>
          </div>
          <div className="">
            <p className="is-size-5">
              <strong>Casos confirmados: </strong>
              {countryData.All.confirmed}
            </p>
            <p className="is-size-5">
              <strong>Casos recuperados: </strong>
              {countryData.All.recovered}
            </p>
            <p className="is-size-5">
              <strong>Total de fallecidos: </strong>
              {countryData.All.deaths}
            </p>
          </div>
          <div className="">
            <p className="is-size-5">
              <strong>Casos cada 100.000 habitantes: </strong>
              {Math.trunc(
                (countryData.All.confirmed * 100000) /
                  countryData.All.population
              )}
            </p>
            <p className="is-size-5">
              <strong>Porcentaje de vacunados: </strong>
              {Math.trunc(
                (vaccines.All.people_vaccinated / countryData.All.population) *
                  100
              )}
              %
            </p>

            <p className="is-size-5">
              <strong>Vacunados completos: </strong>
              {vaccines.All.people_vaccinated}
            </p>
          </div>
          <div className="">
            <p className="is-size-5">
              <strong>Vacunados parcialmente: </strong>
              {vaccines.All.people_partially_vaccinated}
            </p>
            <p className="is-size-5">
              <strong>Vacunas administradas: </strong>
              {vaccines.All.administered}
            </p>
          </div>
        </div>
      </section>
      <section className="box mb-6">
        <h2 className="is-size-2">Grafica del dia a dia</h2>
        <Graphic
          confirmed={confirmed.All.dates}
          deaths={deaths.All.dates}
          recovered={recovered.All.dates}
        />
      </section>
    </div>
  );
};
export default DetailsComponent;
