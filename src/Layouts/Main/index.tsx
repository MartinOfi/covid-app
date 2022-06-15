import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useState, useEffect } from "react";
import Banner from "../../Components/Home";

const Home = (props: any) => {
  const [data, setData] = useState<any[]>([]);
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
   return <h1>Loading...</h1>
  }
  return <Banner data={data[data.length-1].All} />;
};
export default inject("CountriesStore")(observer(Home));
