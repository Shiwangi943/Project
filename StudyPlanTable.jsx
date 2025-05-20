import React from 'react';

const StudyPlanTable = ({ plan }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Your Study Plan</h2>
      <table className="table-auto border-collapse border w-full">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Tasks</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(plan).map(([date, tasks]) => (
            <tr key={date}>
              <td className="border p-2">{date}</td>
              <td className="border p-2">
                {tasks.map((t, i) => (
                  <div key={i}>
                    📘 {t.subject} - {t.topic}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudyPlanTable;
