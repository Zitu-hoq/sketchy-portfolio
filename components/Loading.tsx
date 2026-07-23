"use client";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-amber-100/60 dark:bg-amber-950/60 backdrop-blur-lg transition-colors">
      <img src="/load.gif" alt="Loading" className="w-1/3 h-1/3" />
    </div>
  );
};

export default Loading;
