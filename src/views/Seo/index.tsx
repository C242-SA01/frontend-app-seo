type HistoriesType = {
  id: string;
  url: string;
  name: string;
};
const HistoryView = ({ histories }: { histories: HistoriesType[] }) => {
  return (
    <>
      {histories.length > 0 ? (
        <>
          {histories.map((history: HistoriesType) => (
            <div key={history.id}>
              <p>{history.url}</p>
              <p>{history.name}</p>
            </div>
          ))}
        </>
      ) : (
        <div className="flex w-52 flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      )}
      {histories.map((history: HistoriesType) => (
        <div key={history.id}>
          <p>{history.url}</p>
          <p>{history.name}</p>
        </div>
      ))}
    </>
  );
};
export default HistoryView;
