import { motion } from "framer-motion";
import { useData } from "../context/DataContext";
import CircularProgressBar from "./CircularProgressBar";
import Loading from "./Loading";
import { Pro_Skill } from "./ProjectData";

const ProgressBar = ({ title, progress }) => {
  return (
    <>
      <div className="flex w-full justify-between mb-1 max-sm:mb-0.5 max-xs:w-[90%]">
        <span className="text-base uppercase font-medium text-dark dark:text-light max-sm:text-sm max-xs:text-xs">
          {title}
        </span>
        <span className="text-base font-medium text-dark dark:text-light max-sm:text-sm max-xs:text-xs">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 dark:bg-gray-700 max-sm:h-2 max-xs:h-1.5 max-md:mb-4 max-xs:mb-2 max-xs:w-[90%]">
        <motion.div
          className="bg-primary h-2.5 rounded-full dark:bg-primaryDark max-sm:h-2 max-xs:h-1.5"
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        />
      </div>
    </>
  );
};

export default function Skills() {
  const { data, loading } = useData();
  if (loading) return <Loading />;

  const App_Skill = data.app_skill;
  const Cy_Skill = data.cyber_skill;

  return (
    <>
      <h2 className="font-bold text-8xl mt-32 mb-16 w-full text-center max-md:mt-8 max-md:mb-4 max-lg:text-7xl max-md:text-6xl max-sm:text-5xl max-xs:text-4xl">
        Skills
      </h2>
      <div className="flex w-full h-screen relative items-center justify-center max-md:h-auto">
        <div className="grid grid-cols-12 gap-24 gap-y-16 max-lg:gap-12 max-md:gap-y-8 max-md:gap-0 max-sm:gap-y-4">
          <div className="col-span-6 max-sm:col-span-12">
            <div className="w-full flex flex-col items-center justify-center p-6 relative max-md:p-4 max-sm:p-2">
              <h3 className="mb-4 text-lg text-center font-bold uppercase text-dark/75 dark:text-light/75">
                Web Developement
              </h3>

              {App_Skill.map((framwork, index) => (
                <ProgressBar
                  key={index}
                  title={framwork.frameworkName}
                  progress={framwork.progress}
                />
              ))}
            </div>
          </div>

          <div className="col-span-6 max-sm:col-span-12">
            <div className="w-full flex flex-col items-center justify-center p-6 relative max-md:p-4 max-sm:p-2">
              <h3 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Cyber Security
              </h3>

              {Cy_Skill.slice()
                .reverse()
                .map((framwork, index) => (
                  <ProgressBar
                    key={index}
                    title={framwork.frameworkName}
                    progress={framwork.progress}
                  />
                ))}
            </div>
          </div>

          <div className="col-span-12">
            <div className="w-full flex flex-col items-center justify-center p-6 relative">
              <h3 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Professional Skills
              </h3>
              <div className="w-full flex flex-row justify-center items-center max-sm:flex-wrap">
                {Pro_Skill.map((framwork, index) => (
                  <CircularProgressBar
                    key={index}
                    title={framwork.framework_name}
                    progress={framwork.progress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
