import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useData } from "../context/DataContext";
import LiIcon from "./LiIcon";
import Loading from "./Loading";

const Details = ({
  cert_name,
  provider,
  year,
  location,
  details,
  link,
}: {
  cert_name: string;
  provider: string;
  year: string;
  location: string;
  details: string;
  link: string;
}) => {
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
        <h3 className="capitalize font-bold text-2xl max-md:text-xl max-xs:text-base">
          {cert_name}
          <br />
          <a
            href={link}
            target="_blank"
            className="cursor-pointer capitalize opacity-80"
          >
            {provider}
          </a>
        </h3>
        <span className="font-medium capitalize opacity-80">
          {year} | {location}
        </span>
        <p className="font-medium w-full max-xs:font-light">{details}</p>
      </motion.div>
    </li>
  );
};

function Certifications() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const { data, loading } = useData();
  if (loading) return <Loading />;

  const certificates = data.certificationData;

  return (
    <div className="mt-32 mb-64 max-md:mb-12 max-md:mt-8 text-justify">
      <h2 className="font-bold text-8xl mb-32 w-full text-center max-lg:mt-4 max-lg:mb-8 max-lg:text-7xl max-md:text-6xl max-sm:text-5xl max-xs:text-4xl max-xs:mb-4">
        Certifications
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative max-md:w-[92%] max-xs:w-[96%] max-md:-ml-4"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-slate-900 origin-top dark:bg-amber-100"
        />

        <ul className="w-full flex flex-col items-start justify-between p-4">
          {certificates
            .slice()
            .reverse()
            .map((certificate, index) => (
              <Details
                key={index}
                cert_name={`${certificate.full_name}(${certificate.name})`}
                provider={certificate.provider}
                year={certificate.year}
                location={certificate.location}
                details={certificate.details}
                link={certificate.link}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Certifications;
