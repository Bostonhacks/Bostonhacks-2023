import React from 'react';

const ScheduleComponent = ({ title, data }) => {
  return (
    <div className="flex flex-col items-center text-white mt-10">
      <h1 className="text-6xl mb-12">{title}</h1>
      <table className="text-white">
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="font-ft88b text-sm md:text-lg p-2 text-right">
                {item.time}
              </td>
              <td className="font-ft88 text-sm md:text-lg p-2 border-x-4 border-x-white text-center">
                {item.tableEntry}
              </td>
              <td className="font-ft88 text-sm md:text-lg p-2">
                {item.location}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleComponent;
