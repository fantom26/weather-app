import { DaysSvgSelector } from "../../../../../images/DaysSvgSelector";

export const Card = ({day}) => {
  return (
    <li className="card">
      <div className="card__day">{day.day}</div>
      <div className="card__date">{day.day_info}</div>
      <div className="card__img">
        <DaysSvgSelector id={day.icon_id}/>
      </div>
      <div className="card__temp--day">{day.temp_day}</div>
      <div className="card__temp--night">{day.temp_day}</div>
      <div className="card__text">{day.info}</div>
    </li>
  );
};