interface AuditScoreProps {
  Grade: string;
  description: string;
}

const AuditScore: React.FC<AuditScoreProps> = ({ Grade, description }) => {
  return (
    <div className="h-full p-4 mb-4 bg-white rounded-lg shadow">
      <h2 className="py-3 mb-4 text-xl font-bold text-center text-black rounded-lg bg-primary">
        Grade
      </h2>
      <div className="flex flex-col items-center justify-center">
        <p className="text-8xl font-bold text-black mb-4">{Grade}</p>
        <p className="text-xl font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default AuditScore;
