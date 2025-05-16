import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth } from 'date-fns';

const Calendar = () => {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const events = [
    {
      date: new Date(2024, 5, 15),
      title: 'Italian Cooking Class',
      time: '2:00 PM'
    },
    {
      date: new Date(2024, 5, 18),
      title: 'Baking Workshop',
      time: '10:00 AM'
    },
    {
      date: new Date(2024, 5, 22),
      title: 'Wine Pairing Event',
      time: '6:30 PM'
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-[#333333] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Class Calendar</h1>
          
          <div className="bg-[#333333] rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-white">
                {format(today, 'MMMM yyyy')}
              </h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-[#333333] text-gray-300 rounded-lg hover:bg-gray-700">
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#333333] text-gray-300 rounded-lg hover:bg-gray-700">
                  Next
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-4 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div
                  key={day}
                  className="text-center text-gray-400 font-semibold"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-4">
              {days.map((day, index) => {
                const dayEvents = events.filter(
                  (event) =>
                    format(event.date, 'yyyy-MM-dd') ===
                    format(day, 'yyyy-MM-dd')
                );

                return (
                  <div
                    key={index}
                    className={`min-h-[100px] p-2 rounded-lg ${
                      isToday(day)
                        ? 'bg-orange-500/20 border border-orange-500'
                        : isSameMonth(day, today)
                        ? 'bg-[#333333]'
                        : 'bg-[#333333]/50'
                    }`}
                  >
                    <div className="text-right mb-2">
                      <span
                        className={`inline-block w-6 h-6 text-center rounded-full ${
                          isToday(day)
                            ? 'bg-orange-500 text-white'
                            : 'text-gray-400'
                        }`}
                      >
                        {format(day, 'd')}
                      </span>
                    </div>
                    {dayEvents.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="text-xs p-1 mb-1 rounded bg-orange-500/20 text-orange-400"
                      >
                        {event.title}
                        <div className="text-gray-400">{event.time}</div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;