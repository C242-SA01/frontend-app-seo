interface RecommendationProps {
  recommendations: string;
}

const Recommendation: React.FC<RecommendationProps> = ({ recommendations }) => {
  return (
    <div className="p-2 bg-white rounded-lg shadow-lg">
      <h2 className="py-3 mb-4 text-xl font-bold text-center text-black rounded-lg bg-primary">Recommendations</h2>
      <p className="px-4 py-2">{recommendations}</p>
    </div>
  );
};

export default Recommendation;