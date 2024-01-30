import React, { useRef, useState } from 'react';
import { ArrowBottom } from '../../asset/icon';

export default function Calender({ apiData }) {
  const [date, setDate] = useState(new Date());
  /**
   * @handlePrevMonth function used to get dates of previous month.
   * @description gets no arguments but use @setDate to set the month
   */
  const handlePrevMonth = () => {
    setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
  };

  /**
   * @handleNextMonth function used to get dates of next month.
   * @description gets no arguments but use @setDate to set the month
   */
  const handleNextMonth = () => {
    setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
  };
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  /**
   * these variables are used to calculate the dates of the selected month
   */
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDate = new Date(year, month, 1);
  const firstDayWeekDay = firstDate.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalWeek = Math.ceil((firstDayWeekDay + daysInMonth) / 7);

  /**
  * this variable is the main calander
  */
  const calendar = [];

  /**
   * this scope  is used to generate the calendar.
   */
  let dayCount = 1;
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  let prevMonthDay = firstDayWeekDay;
  for (let week = 0; week < totalWeek; week += 1) {
    calendar[week] = [];
    for (let day = 0; day < 7; day += 1) {
      if (week === 0 && day < firstDayWeekDay) {
        prevMonthDay -= 1;
        calendar[week][day] = new Date(year, month - 1, daysInPrevMonth - prevMonthDay);
      } else if (dayCount > daysInMonth) {
        prevMonthDay += 1;
        calendar[week][day] = new Date(year, month + 1, prevMonthDay);
      } else {
        calendar[week][day] = new Date(year, month, dayCount);
        dayCount += 1;
      }
    }
  }
  const getDate = (day) => {
    const dt = apiData.find((d) => {

      return new Date(d.created).toDateString() === day;
    })
    // console.log({ dt: dt?.created, day });
    if (dt) return true;
    else false;
  }
  console.log(apiData);
  // const todayDate = ({ day, date }) => {
  //   // if (day) {
  //   //   const dayNum = new Date(date).getDay();
  //   //   weekdays[dayNum];
  //   // }
  //   const nowDate = new Date().getDate();
  //   const dt = new Date(date).getDate();
  //   console.log({ nowDate, dt });
  //   if (dt === nowDate) return true;
  //   return false;
  // }
  return (
    <div
      className="border border-primary rounded-lg px-9 py-6 border-opacity-45"
    >
      <div
        className="flex justify-between items-center px-2 py-4"
      >
        <div className="text-2xl font-medium flex space-x-1 leading-5">
          <p>{monthNames[month]}</p>
          <p className="text-primary">{year}</p>
        </div>
        <div className="flex items-center space-x-4">
          <ArrowBottom className="rotate-90 cursor-pointer" onClick={handlePrevMonth} />
          <ArrowBottom className="rotate-[270deg] cursor-pointer" onClick={handleNextMonth} />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            {
              weekdays.map((each) => (
                <th
                  className="text-center text-md font-semibold text-gray py-2"
                  key={each}
                >
                  {each}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            calendar.map((week) => (
              <tr key={`${week}-week`}>
                {
                  week.map((singleDate) => (
                    <td
                      key={`${singleDate}-day`}
                      className={`
                        text-center text-md font-semibold cursor-pointer transition-all duration-300 rounded-lg py-2`}
                    >
                      {getDate(new Date(singleDate).toDateString()) ? (
                        <div className={`h-8 w-8 ${new Date(singleDate).getDate() === new Date().getDate() ? '' : 'bg-opacity-30'} bg-primary rounded-full flex items-center justify-center font-medium text-xs `}>
                          {new Date(singleDate).getDate()}
                        </div>
                      ) : '.'}

                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
