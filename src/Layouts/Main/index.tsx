import { inject, observer } from "mobx-react";
import { useState, useEffect } from "react";
import Banner from "../../Components/Banner";
import CountriesTable from "../../Components/Home/CountriesTable/Container";
import "antd/dist/antd.min.css";
import { CountryData } from "./models";
const Home = (props: any) => {
  const [data, setData] = useState<CountryData[]>([]);
  const { CountriesStore } = props;

  useEffect(() => {
    CountriesStore.getRelevantData();
  }, []);

  useEffect(() => {
    if (CountriesStore.relevantData?.Armenia) {
      const array = Object.keys(CountriesStore.relevantData).map((key) => {
        return CountriesStore.relevantData[key];
      });
      setData(array);
    }
  }, [CountriesStore.relevantData]);

  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="pb-5">
      <Banner data={data[data.length - 1].All} />
      <CountriesTable data={data} />
    </div>
  );
};
export default inject("CountriesStore")(observer(Home));
