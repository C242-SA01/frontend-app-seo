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
        <div className="flex flex-col gap-4 w-52 bg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full skeleton shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="w-20 h-4 skeleton"></div>
              <div className="h-4 skeleton w-28"></div>
            </div>
          </div>
          <div className="w-full h-32 skeleton"></div>
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
