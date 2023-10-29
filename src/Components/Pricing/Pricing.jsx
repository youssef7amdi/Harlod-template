import { BiSolidUser } from "react-icons/bi";
import { RiPlaneFill } from "react-icons/ri";
import { BsFillRocketFill } from "react-icons/bs";
import { FaParachuteBox } from "react-icons/fa";
import { useState } from "react";

import SectionHeading from "../reusable-components/SectionHeading";
import PricingNav from "./PricingNav";
import PricingPlans from "./PricingPlans";
import IndividualPlan from "./IndividualPlan";
import ProfessionalPlan from "./ProfessionalPlan";

import "./pricing.css";

const pricingHeading = {
  smallParagraph: "Pricing",
  heading: "Choose your Plan",
  largeParagraph:
    "A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.",
  centrality: "center",
  fontSize: "20px",
  margin: "auto",
};

const pricingTypes = [
  {
    icon: <BiSolidUser />,
    pricingType: "Individual",
    time: "For Monthly Project",
  },
  {
    icon: <BiSolidUser />,
    pricingType: "Professional",
    time: "For Yearly Project",
  },
];

const individualPlans = [
  {
    id: 1,
    icon: <FaParachuteBox />,
    planName: "Basic Plan",
    planPricing: "09",
    planCriteria: [
      "2 App and project",
      "400 Gb/s storage",
      "Free Custom domain",
      "Chat Support",
      "No transaction fees",
      "Unlimited Storage",
    ],
  },
  {
    id: 2,
    icon: <RiPlaneFill />,
    planName: "Startup Plan",
    planPricing: "49",
    planCriteria: [
      "2 App and project",
      "400 Gb/s storage",
      "Free Custom domain",
      "Chat Support",
      "No transaction fees",
      "Unlimited Storage",
    ],
  },
  {
    id: 3,
    icon: <BsFillRocketFill />,
    planName: "Enterprise Plan",
    planPricing: "99",
    planCriteria: [
      "2 App and project",
      "400 Gb/s storage",
      "Free Custom domain",
      "Chat Support",
      "No transaction fees",
      "Unlimited Storage",
    ],
  },
];

function Pricing() {
  const [pricingType, setPricingType] = useState("Individual");
  const [currentPlan, setCurrentPlan] = useState(2);

  function handleChangePlanType(type) {
    setPricingType(type);
  }

  function handleChoosePlan(id) {
    setCurrentPlan(id);
  }

  return (
    <div id="pricing">
      <SectionHeading sectionHeading={pricingHeading} />
      <PricingNav
        pricingTypes={pricingTypes}
        pricingState={pricingType}
        onClick={handleChangePlanType}
      />
      <PricingPlans>
        {pricingType.toLowerCase() === "individual" && (
          <>
            {individualPlans.map((plan) => (
              <IndividualPlan
                plan={plan}
                currentPlan={currentPlan}
                onClick={handleChoosePlan}
                key={plan.id}
              />
            ))}
          </>
        )}
        {pricingType.toLowerCase() === "professional" && <ProfessionalPlan />}
      </PricingPlans>
    </div>
  );
}

export default Pricing;
