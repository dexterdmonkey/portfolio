import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-white">Loading ...</div>
    </div>
  );
};

export default LoadingComponent;
