import { useLoaderData } from "react-router-dom";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { getStoredCategories } from "../utility/localstorege";

const Statistics = () => {
  const categories = useLoaderData();
  const totalData = categories.length;
  const localStorageData = getStoredCategories();
  const totalLocalStorageData = localStorageData.length;
  const total = totalData + totalLocalStorageData;

  const data = [
    { value: (totalData / total) * 100 },
    {
      value: (totalLocalStorageData / total) * 100,
    },
  ];

  const colors = ["#FF444A", "#00C49F"];

  return (
    <div style={{ width: "100%", height: 500, marginTop: "200px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} label>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center flex-row my-8">
        <div className="flex items-center flex-col md:flex-row">
          <h1>Your Donation</h1>
          <small className="bg-[#00C49F] h-2 px-12 md:ml-3 my-4 md:my-0 text-[#0B0B0B]"></small>
        </div>
        <div className="flex flex-col md:flex-row items-center ml-6">
          <h1>Total Donation</h1>
          <small className="bg-[#FF444A] h-2 px-12 md:ml-3 my-4 md:my-0 text-[#0B0B0B]"></small>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
