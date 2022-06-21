import World from "../../Assets/Images/world.jpg";
import { BannerProps } from "./model";
const Banner = ({ data, vaccines }:BannerProps) => {
  return (
    <div className="w-75vw mx-auto box  mt-5">
      <h1 className="is-size-2 has-text-centered">
        Informacion del covid al rededor del mundo
      </h1>
      <div className="grid-responsive w-100percent">
        <figure>
          <img src={World} alt="" width={400} id="world-image" />
        </figure>
          <section className="is-flex is-flex-direction-column is-justify-content-space-between ">
            <p className="is-size-4 my-3">
              <strong>Confirmados: </strong>
              {data.confirmed}
            </p>
            <p className="is-size-4 my-3">
              <strong>Muertos: </strong>
              {data.deaths}
            </p>
            <p className="is-size-4 my-3">
              <strong>Recuperados: </strong>
              {data.recovered}
            </p>
          </section>
          <section className="is-flex is-flex-direction-column is-justify-content-space-between ">
            <p className="is-size-4 my-3">
              <strong>Vacunadas administradas: </strong>
              {vaccines.administered}
            </p>
            <p className="is-size-4 my-3">
              <strong>Vacunados: </strong>
              {vaccines.people_vaccinated}
            </p>
            <p className="is-size-4 my-3">
              <strong>Vacunados Parcialmente: </strong>
              {vaccines.people_partially_vaccinated}
            </p>
          </section>
      </div>
    </div>
  );
};
export default Banner;
