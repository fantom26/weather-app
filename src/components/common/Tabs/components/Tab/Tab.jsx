export const Tab = ({tabInfo}) => {
  return (
    <li className="tab__item">
      <button className="tab__btn">
        {tabInfo.value}
      </button>
    </li>
  );
};