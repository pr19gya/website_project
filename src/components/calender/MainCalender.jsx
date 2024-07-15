// src/components/Calendar.jsx
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, isSameMonth, isSameDay } from 'date-fns';

const MainCalender = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy';

    return (
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="text-xl p-2 bg-gray-200 rounded-md shadow hover:bg-gray-300">
          &lt;
        </button>
        <span className="text-xl font-bold">{format(currentMonth, dateFormat)}</span>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="text-xl p-2 bg-gray-200 rounded-md shadow hover:bg-gray-300">
          &gt;
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = 'E';
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center flex-1 font-semibold" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="flex bg-gray-100 p-2 rounded-md">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        const eventKey = format(cloneDay, 'yyyy-MM-dd');
        const eventText = events[eventKey];

        days.push(
          <div
            className={`p-4 text-center flex-1 border border-gray-200 ${!isSameMonth(day, monthStart) ? 'text-gray-400' : ''}`}
            key={day}
          >
            <div className={`inline-block mb-2 ${isSameDay(day, new Date()) ? 'bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center' : 'w-16 h-16'}`}>
              {formattedDate}
            </div>
            <div className="block text-sm text-red-500 mt-1">
              {eventText && (
                <span className="inline-block max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">{eventText}</span>
              )}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default MainCalender;
