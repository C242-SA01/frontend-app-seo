import React from 'react';

interface RecommendationProps {
  recommendations: string;
}

const Recommendation: React.FC<RecommendationProps> = ({ recommendations }) => {
  const recommendationsArray = recommendations.split(/\d+\.\s/).filter((rec) => rec.trim() !== "");
  return (
    <div className="p-2 bg-white rounded-lg shadow-lg">
      <h2 className="py-3 mb-4 text-xl font-bold text-center text-black rounded-lg bg-primary">Recommendations</h2>
        <ol className="list-decimal list-inside">
          {recommendationsArray.map((rec, index) => (
            <li key={index} className="mb-2">
              {rec}
            </li>
          ))}
        </ol>
    </div>
  );
};

export default Recommendation;