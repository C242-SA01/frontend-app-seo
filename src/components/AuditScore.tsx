interface AuditScoreProps {
  score: string;
  description: string;
}

const AuditScore: React.FC<AuditScoreProps> = ({ score, description }) => {
  return (
    <div className="h-full p-6 text-center rounded-lg shadow bg-primary ">
      <h3 className="mb-2 text-xl font-bold text-black">Skor Audit</h3>
      <p className="text-5xl font-bold text-black">{score}</p>
      <p className="text-lg font-semibold">{description}</p>
    </div>
  );
};
export default AuditScore;
