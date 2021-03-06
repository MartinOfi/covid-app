import { ColumnsType } from "antd/lib/table";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { CountryData } from "../../../../types/models";
import CountriesTableComponent from "../Component";

const CountriesTable = ({ data }: CountryData[] | any) => {
  const rowData = useMemo(() => {
    const newData = data
      .map((item: CountryData) => {
        return {
          id: item.All.iso,
          country: item.All.country,
          confirmed: item.All.confirmed || "Desconocidos",
          deaths: item.All.deaths || "Desconocidas",
          population: item.All.population || "Desconocida",
          continent: item.All.continent || "Desconocido",
          lifeExpectancy: item.All.life_expectancy || "Desconocida",
        };
      })
      .filter((item) => item.country !== undefined);
    return newData;
  }, [data]);

  const columns = useMemo(() => {
    const columns: ColumnsType<any> = [
      {
        key: "1",
        title: "Pais",
        dataIndex: "country",
      },
      {
        key: "2",
        title: "Confirmados",
        dataIndex: "confirmed",
        sorter: (a: any, b: any) => a.confirmed - b.confirmed,
        sortDirections: ["descend", "ascend"],
      },
      {
        key: "3",
        title: "Muertos",
        dataIndex: "deaths",
        sorter: (a: any, b: any) => a.deaths - b.deaths,
        sortDirections: ["descend", "ascend"],
      },

      {
        key: "4",
        title: "Poblacion total",
        dataIndex: "population",
        sorter: (a: any, b: any) => a.population - b.population,
        sortDirections: ["descend", "ascend"],
      },
      {
        key: "5",
        title: "Continente",
        dataIndex: "continent",
        filters: [
          { text: "Asia", value: "Asia" },
          { text: "Europe", value: "Europa" },
          { text: "North America", value: "Norte America" },
          { text: "Oceania", value: "Oceania" },
          { text: "South America", value: "Sur America" },
        ],
        onFilter: (value: any, record: any) => record.continent === value,
      },
      {
        key: "6",
        title: "Expectativa de vida",
        dataIndex: "lifeExpectancy",
        sorter: (a: any, b: any) => a.lifeExpectancy - b.lifeExpectancy,
        sortDirections: ["descend", "ascend"],
      },
      {
        key: "7",
        render: (a) =>
          a?.country && <Link to={`/detail/${a.country}`}>Ver mas</Link>,
      },
    ];
    return columns;
  }, []);
  return <CountriesTableComponent columns={columns} rowData={rowData} />;
};
export default CountriesTable;
