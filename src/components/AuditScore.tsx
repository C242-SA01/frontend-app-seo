interface AuditScoreProps {
  Grade: string;
  description: string;
}

const AuditScore: React.FC<AuditScoreProps> = ({ Grade, description }) => {
  return (
    <div className="h-full p-6 text-center rounded-lg shadow bg-primary ">
      <h3 className="mb-2 text-xl font-bold text-black">Grade</h3>
      <p className="text-7xl font-bold text-black mb-4">{Grade}</p>
      <p className="text-lg font-semibold">{description}</p>
    </div>
  );
};
export default AuditScore;
