import React from 'react';

const ScheduleComponent = ({ title, data }) => {
  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-6xl mb-12">{title}</h1>
      <table className="text-white">
        <thead>
          <tr>
            <th className="text-lg md:text-2xl font-ft88b">TIME</th>
            <th className="text-lg md:text-2xl font-ft88b">TITLE</th>
            <th className="text-lg md:text-2xl font-ft88b">LOCATION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="font-ft88b text-md md:text-lg md:p-2  ">
                {item.time}
              </td>
              <td className="font-ft88 text-md md:text-lg md:p-2 border-x-4 border-x-white ">
                {item.tableEntry}
              </td>
              <td className="font-ft88 text-md md:text-lg md:p-2">
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
