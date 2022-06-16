import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContryDetails } from "../../Layouts/Main/models";
import Spinner from "../../Components/Spinner";
import DetailsComponent from "../../Components/Details";

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
      <div className="mt-6 has-text-centered" >
        <Spinner />
      </div>
    );
  }
  return <DetailsComponent {...data} />;
};
export default inject("CountriesStore")(observer(DetailsPage));
