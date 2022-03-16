import { Tab } from "./components/Tab/Tab";

export const Tabs = () => {
  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ];
  return (
    <div className="tabs">
      <div className="tabs__wrapper">
        <ul className="tabs__list">
          {tabs.map((tab, i) => (
            <Tab tabInfo={tab} key={i}/>
          ))}
        </ul>
        <button className="tabs__cancel">Отменить</button>
      </div>
    </div>
  );
};