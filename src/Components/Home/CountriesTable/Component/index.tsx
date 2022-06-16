import { Table } from "antd";

const CountriesTableComponent = ({ columns, rowData }) => {
  return (
    <div className="w-75vw mx-auto box">
      <h1 className="is-size-2">Datos de todos los paises</h1>
      <Table columns={columns} dataSource={rowData} />
    </div>
  );
};
export default CountriesTableComponent;
