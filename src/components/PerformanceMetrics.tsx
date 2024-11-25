interface Metric {
  name: string;
  value: string | number;
}

interface PerformanceMetricsProps {
  metrics: Metric[];
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ metrics }) => {
  return (
    <div className="p-4 m-8 bg-white rounded-lg shadow">
      <h2 className="py-3 text-lg font-bold text-center text-black rounded-t-lg bg-primary">Performance Metrics</h2>
      <table className="table w-full overflow-hidden border-collapse rounded-lg">
        {/* <thead className="text-black rounded-t-lg text-[16px] bg-primary">
          <tr>
            <th className="px-4 py-2">Metric</th>
            <th className="px-4 py-2">Value</th>
          </tr>
        </thead> */}
        <tbody>
          {metrics.map((metric, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="px-4 py-2">{metric.name}</td>
              <td className="px-4 py-2 ">{metric.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceMetrics;
