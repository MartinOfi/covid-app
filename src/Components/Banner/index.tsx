import World from "../../Assets/Images/world.jpg";
const Banner = ({ data }) => {
  return (
    <div className="w-75vw mx-auto box is-flex mt-5">
      <figure>
        <img src={World} alt="" width={400} id="world-image" />
      </figure>
      <section className="w-100percent has-text-centered is-flex is-flex-direction-column is-justify-content-space-between ">
        <h1 className="is-size-2">
          Informacion del covid al rededor del mundo
        </h1>
        <div className="is-flex is-flex-direction-column is-justify-content-space-between ">
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
        </div>
      </section>
    </div>
  );
};
export default Banner;
