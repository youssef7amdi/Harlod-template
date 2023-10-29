import { about1, about2, about3 } from "../../constants/images";
import { GiCheckboxTree } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { TbSquaresDiagonal } from "react-icons/tb";

import SectionHeading from "../reusable-components/SectionHeading";
import BlogBox from "./BlogBox";
import BlogImg from "./BlogImg";
import BlogInfo from "./BlogInfo";

import "./blog.css";

const blogHeading = {
  smallParagraph: "Blog",
  heading: "Our Regular News",
  largeParagraph:
    "A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.",
  centrality: "center",
  fontSize: "20px",
  margin: "auto",
};

const blogs = [
  {
    imageSrc: about1,
    icon: <GiCheckboxTree />,
    title: "We makes UI/UX design very easy for you.",
    paragraph: `He nicked it ticket boo harry teh cras bargy chap mush spiffing spend a penny.`,
    moreUrl: "#",
    color: "#2558ab",
  },
  {
    imageSrc: about2,
    icon: <FaLaptopCode />,
    title: "Current world design trends know easily.",
    paragraph: `He nicked it ticket boo harry teh cras bargy chap mush spiffing spend a penny.`,
    moreUrl: "#",
    color: "#ff7f51",
  },
  {
    imageSrc: about3,
    icon: <TbSquaresDiagonal />,
    title: "We calculate clients demand for research.",
    paragraph: `He nicked it ticket boo harry teh cras bargy chap mush spiffing spend a penny.`,
    moreUrl: "#",
    color: "#2fb4ae",
  },
];

function Blog() {
  return (
    <div id="blog">
      <SectionHeading sectionHeading={blogHeading} />
      <section className="blog-container container grid-3">
        {blogs.map((blog) => (
          <BlogBox key={blog.title}>
            <BlogImg
              imageSrc={blog.imageSrc}
              icon={blog.icon}
              color={blog.color}
            />
            <BlogInfo
              title={blog.title}
              paragraph={blog.paragraph}
              moreUrl={blog.moreUrl}
            />
          </BlogBox>
        ))}
      </section>
    </div>
  );
}

export default Blog;
