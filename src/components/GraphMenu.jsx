export const GraphMenu = () => {
  return (
    <div className="graph__menu">
      <div className="graph__menu__item graph__menu__item--selected">
        Temperature
      </div>
      <div className="graph__menu__line">|</div>
      <div className="graph__menu__item">Precipitation</div>
      <div className="graph__menu__line">|</div>
      <div className="graph__menu__item">Wind</div>
    </div>
  );
};
