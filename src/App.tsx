import React, { useEffect, useState } from "react";
import { mockData } from "./constants/mockData";
import { sortArrayOnField } from "./utils/sortArrayOnField";

function App() {
  const [sortedMockData, setSortedMockData] = useState(mockData);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<boolean[]>(
    new Array(mockData.length).fill(false),
  );

  const uniqueFields = [...new Set(mockData.map((item) => item.type))];

  const handleSort = (key: string) => {
    setExpandedFolders(expandedFolders.fill(false));
    const sortedData = sortArrayOnField(
      sortedMockData,
      key as keyof (typeof sortedMockData)[0],
      sortKey === key ? (sortDirection === "asc" ? "desc" : "asc") : "asc",
    );
    setSortedMockData(sortedData);
    setSortDirection(
      sortKey === key ? (sortDirection === "asc" ? "desc" : "asc") : "asc",
    );
    setSortKey(key);
  };

  const handleFolderClicked = (index: number) => {
    const item = sortedMockData[index];
    if (item.type === "folder") {
      expandFolder(index);
    }
  };

  const expandFolder = (index: number) => {
    const newExpandedFolders = [...expandedFolders];
    newExpandedFolders[index] = !newExpandedFolders[index];
    setExpandedFolders(newExpandedFolders);
  };

  const handleFilterChange = (filter: string) => {
    setExpandedFolders(expandedFolders.fill(false));
    const filteredData = mockData.filter((item) =>
      item.type.toLowerCase().includes(filter.toLowerCase()),
    );
    setSortedMockData(filteredData);
  };

  useEffect(() => {
    handleSort("name");
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-column items-center justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">BrightHR tech task</h1>
        <div>
          Filter:{" "}
          <select
            className="border border-gray-300 rounded p-2"
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="">All</option>
            {uniqueFields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
      </div>
      <table className="w-full border-collapse rounded-2xl overflow-hidden">
        <thead>
          <tr className="flex flex-row bg-gray-200 items-center justify-between gap-4 p-2 border-b">
            <th
              className="w-48 p-2 text-left underline cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name{" "}
              {sortKey === "name" ? (sortDirection === "asc" ? "▼" : "▲") : ""}
            </th>
            <th
              className="w-48 p-2 text-left underline cursor-pointer"
              onClick={() => handleSort("type")}
            >
              Type{" "}
              {sortKey === "type" ? (sortDirection === "asc" ? "▼" : "▲") : ""}
            </th>
            <th
              className="w-48 p-2 text-left underline cursor-pointer"
              onClick={() => handleSort("added")}
            >
              Added{" "}
              {sortKey === "added" ? (sortDirection === "asc" ? "▼" : "▲") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedMockData.map((item, index) => {
            return (
              <React.Fragment key={index + item.name}>
                <tr
                  className={`flex flex-row bg-gray-200 items-center justify-between gap-4 p-2 border-b border-gray-400 last:border-0 ${item.type === "folder" ? "underline cursor-pointer" : ""}`}
                  onClick={() => handleFolderClicked(index)}
                >
                  <td className="w-48 px-2">{item.name}</td>
                  <td className="w-48 px-2">{item.type}</td>
                  <td className="w-48 px-2">{item.added}</td>
                </tr>
                {expandedFolders[index] && item.type === "folder" && item.files
                  ? item.files.map((file, fileIndex) => (
                      <tr
                        className="flex flex-row bg-gray-100 items-center justify-between gap-4 p-2 border-b border-gray-300 last:border-0 pl-8"
                        key={`${index}-${fileIndex}`}
                      >
                        <td className="w-48 px-2">{file.name}</td>
                        <td className="w-48 px-2">{file.type}</td>
                        <td className="w-48 px-2">{file.added}</td>
                      </tr>
                    ))
                  : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
