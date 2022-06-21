import { inject, observer } from "mobx-react";
import { useState, useEffect } from "react";
import Banner from "../../Components/Banner";
import CountriesTable from "../../Components/Home/CountriesTable/Container";
import "antd/dist/antd.min.css";
import Spinner from "../../Components/Spinner";
import { GlobalData } from "../../types/models";

const Home = (props: any) => {
  const [data, setData] = useState<GlobalData>({
    countries: [],
    Global: {},
  });
  const { CountriesStore } = props;

  useEffect(() => {
    CountriesStore.getRelevantData();
  }, []);

  useEffect(() => {
    if (
      CountriesStore.relevantData.countries?.Armenia &&
      CountriesStore.relevantData.Global?.All
    ) {
      const array = Object.keys(CountriesStore.relevantData.countries).map(
        (key: any) => {
          return CountriesStore.relevantData.countries[key];
        }
      );
      setData({
        ...data,
        countries: array,
        Global: CountriesStore.relevantData.Global,
      });
    }
  }, [
    CountriesStore.relevantData.countries,
    CountriesStore.relevantData.Global,
  ]);

  if (data.countries.length === 0) {
    return (
      <div className="mt-6 has-text-centered">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="pb-5" id="home-page">
      <Banner
        data={data.countries[data.countries.length - 1].All}
        vaccines={data.Global.All}
      />
      <CountriesTable data={data.countries} />
    </div>
  );
};
export default inject("CountriesStore")(observer(Home));
