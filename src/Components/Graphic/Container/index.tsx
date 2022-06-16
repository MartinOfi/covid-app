import ReactApexChart from "react-apexcharts";

const Graphic = ({ confirmed,deaths,recovered }) => {  
  const graphicData: any = {
    series: [
      {
        name: "Confirmados",
        data: Object.values(confirmed),
      },
      {
        name: "Muertos",
        data: Object.values(deaths),
      },
      {
        name: "Recuperados",
        data: Object.values(recovered),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: Object.keys(deaths),
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        width={1000}
        options={graphicData.options}
        series={graphicData.series}
        type="area"
        height={350}
      />
    </div>
  );
};
export default Graphic;
