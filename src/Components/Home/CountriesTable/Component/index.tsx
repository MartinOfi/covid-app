import { Table } from "antd";

const CountriesTableComponent = ({columns,rowData}) => {
  return(
    <div className="w-75vw mx-auto">
      <Table columns={columns} dataSource={rowData}/>
    </div>
  )
}
export default CountriesTableComponent;