import { AiOutlineCheck } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";

function IndividualPlan({ plan, currentPlan, onClick }) {
  const { id, icon, planName, planPricing, planCriteria } = plan;

  return (
    <div
      className={`plan-box ${currentPlan === id ? "selected" : ""}`}
      onClick={() => onClick(id)}
    >
      <div className="plan-header">
        <div>
          <span className="icon">{icon}</span>
          <span className="dark">{planName}</span>
        </div>
        <div>
          $<span className="plan-price">{planPricing}</span>
          <span className="plan-time"> /month</span>
        </div>
      </div>
      <div className="plan-info">
        <ul className="plan-criteria">
          {planCriteria.map((criterion) => (
            <li className="criterion" key={criterion}>
              <span className="check">
                <AiOutlineCheck />
              </span>
              {criterion}
            </li>
          ))}
        </ul>
        <button>
          <BsCheck2All /> Choose Plan
        </button>
      </div>
    </div>
  );
}

export default IndividualPlan;
