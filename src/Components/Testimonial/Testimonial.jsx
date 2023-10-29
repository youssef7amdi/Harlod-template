import { testimonialImg } from "../../constants/images";
import SectionHeading from "../reusable-components/SectionHeading";
import TestimonialBox from "./TestimonialBox";

import "./testimonial.css";

const testimonialHeading = {
  smallParagraph: "Testimonial",
  heading: "People talk about us",
  largeParagraph:
    "A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.",
  centrality: "center",
  fontSize: "20px",
  margin: "auto",
};

const testimonials = [
  {
    id: 1,
    imageSrc: testimonialImg,
    name: "Janice C.Campbe",
    role: "Embedded analytics",
    text: '"We use a customized application specifically designed a testing gnose to keep away for people."',
  },
  {
    id: 2,
    imageSrc: testimonialImg,
    name: "Janice C.Campbe",
    role: "Embedded analytics",
    text: '"We use a customized application specifically designed a testing gnose to keep away for people."',
  },
  {
    id: 3,
    imageSrc: testimonialImg,
    name: "Janice C.Campbe",
    role: "Embedded analytics",
    text: '"We use a customized application specifically designed a testing gnose to keep away for people."',
  },
];

function Testimonial() {
  return (
    <div id="testimonial">
      <SectionHeading sectionHeading={testimonialHeading} />
      <section className="testimonial-container container grid-3">
        {testimonials.map((testimonial) => (
          <TestimonialBox key={testimonial.id} testimonial={testimonial} />
        ))}
      </section>
    </div>
  );
}

export default Testimonial;
