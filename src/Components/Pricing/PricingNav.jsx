function PricingNav({ pricingTypes, pricingState, onClick }) {
  return (
    <nav className="pricing-nav">
      {pricingTypes?.map((type) => (
        <button
          className={`${pricingState === type.pricingType ? "selected" : ""}`}
          onClick={() => onClick(type.pricingType)}
          key={type.pricingType}
        >
          <span
            className="dark"
            style={{
              opacity: pricingState === type.pricingType ? "1" : "0",
            }}
          >
            {type.icon}
          </span>

          <span className="dark">{type.pricingType}</span>
          <span className="light">{type.time}</span>
        </button>
      ))}
    </nav>
  );
}

export default PricingNav;
