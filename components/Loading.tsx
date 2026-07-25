"use client";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary/60 dark:bg-primary/60 backdrop-blur-lg transition-colors">
      <img
        src="/load.gif"
        alt="Loading"
        className="lg:w-1/3 lg:h-1/3 max-md:w-3/4 max-md:h-1/4"
      />
    </div>
  );
};

export default Loading;
