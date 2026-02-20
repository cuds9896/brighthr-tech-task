import { mockData } from "./constants/mockData";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">BrightHR tech task</h1>
      <table className="w-full border-collapse rounded-2xl overflow-hidden">
        <thead>
          <tr className="flex flex-row bg-gray-200 items-center justify-between gap-4 p-2 border-b">
            <th className="w-48 p-2 text-left">Name</th>
            <th className="w-48 p-2 text-left">Type</th>
            <th className="w-48 p-2 text-left">Added</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => {
            return (
              <tr
                className={`flex flex-row bg-gray-200 items-center justify-between gap-4 p-2 border-b border-gray-400 last:border-0 ${item.type === "folder" ? "underline" : ""}`}
                key={index}
              >
                <td className="w-48 px-2">{item.name}</td>
                <td className="w-48 px-2">{item.type}</td>
                <td className="w-48 px-2">{item.added}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
