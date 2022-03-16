import { GlobalSvgSelector } from "../../../../../images/GlobalSvgSelector";

export const ThisDayInfoItem = ({itemInfo}) => {
  return (
    <li className="thisDayInfo__item">
      <div className="thisDayInfo__img">
        <GlobalSvgSelector id={itemInfo.icon_id}/>
      </div>
      <div className="thisDayInfo__indicator">
        {itemInfo.name}
      </div>
      <div className="indicator__value">
        {itemInfo.value}
      </div>
    </li>
  );
};