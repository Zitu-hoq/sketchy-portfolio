import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }: { type: string; time: string; place: string; info: string }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between max-md:my-4 max-md:w-full max-md:ml-12 max-md:mx-0 max-xs:ml-auto max-xs:mr-4"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl max-md:text-xl">{type}</h3>
        <span className="font-medium capitalize text-secondary/75 dark:text-secondary/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full max-xs:font-light">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  return (
    <div className="my-32 max-md:my-4 text-justify">
      <h2 className="font-bold text-8xl mb-32 w-full text-center max-md:mb-8 max-lg:text-7xl max-md:text-6xl max-sm:text-5xl max-xs:text-4xl">
        Educations
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative max-md:w-[92%] max-md:-ml-4"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-secondary origin-top dark:bg-secondary"
        />

        <ul className="w-full flex flex-col items-start justify-between p-4">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2019-2024"
            place="Faridpur Engineering College, Faridpur"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Details
            type="Higher Secondary School Certificate"
            time="2016-2018"
            place="Cantonment College, Cumilla"
            info="Relevant courses included Physics, Chemistry, Biology, Higher Mathematics, and Computer Science basics."
          />
          <Details
            type="Secondary School Certificate"
            time="2016"
            place="Thakurgaon Govt. Boys High School, Thakurgaon"
            info="Relevant courses included General Science, Mathematics, Physics, Chemistry, and Biology fundamentals."
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
