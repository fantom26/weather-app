import {ThisDayInfoItem} from "./components/ThisDayInfoItem/ThisDayInfoItem";

export const ThisDayInfoList = ({items}) => {
  return (
    <ul className="thisDayInfo__list">
      {
        items.map((item, i) => <ThisDayInfoItem key={i} itemInfo={item}/>)
      }
    </ul>
  );
};