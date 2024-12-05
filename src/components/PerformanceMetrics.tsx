interface Metric {
  name: string;
  value: string | number;
}

interface PerformanceMetricsProps {
  metrics?: Metric[];  // Tandai sebagai opsional
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ metrics = [] }) => {
  return (
    <div className="p-4 m-8 bg-white rounded-lg shadow">
      <h2 className="py-3 mb-4 text-xl font-bold text-center text-black rounded-lg bg-primary">Performance Metrics</h2>
      <table className="table w-full overflow-hidden border-collapse rounded-lg">
        <tbody>
          {metrics.length > 0 ? (
            metrics.map((metric, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="w-1/2 px-4 py-3 font-semibold border-r">{metric.name}</td>
                <td className="w-1/2 px-4 py-3">
                  {typeof metric.value === "number" ? Math.round(metric.value) : metric.value} %
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="text-center py-4">
                No metrics available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceMetrics;
