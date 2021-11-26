import moment from "jalali-moment";
import { useState } from "react";
import { getDaysOfMonth } from "../utility/createMonthMatrix";
// moment.locale("en");

export default function SmallCalendar() {
  const [state, setState] = useState(moment());
  const nextMonth = () => {
    setState(state.clone().add(1, "jMonth"));
  };
  const prevMonth = () => {
    setState(state.clone().subtract(1, "jMonth"));
  };
  const matrix = getDaysOfMonth(state);
  return (
    <div className="small-calendar-wrapper">
      <div className="small-calendar-header">
        <button onClick={nextMonth}>next</button>
        <button onClick={prevMonth}>prev</button>
      </div>
      <div className="small-calendar-content">
        {matrix.map((item, index1) => {
          return (
            <div key={index1} className="small-calendar-row">
              {item.map((item2: any, index2: any) => {
                return (
                  <div key={index2} className="small-calendar-item">
                    {item2.format("jDD")}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
