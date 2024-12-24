import React, { useEffect } from "react";
import "./style.scss"; // Add styles for the loader

interface LoadingProps {
  onLoaded: () => void; // Callback when loading finishes
}

const Loading: React.FC<LoadingProps> = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 800);

    return () => clearTimeout(timer); // Cleanup
  }, [onLoaded]);

  return (
    <div className="loading-container">
      {/* Replace with your SVG or PNG image */}
      <img
        src="/src/assets/images/loading.png"
        alt="Loading"
        className="loading-image"
      />
    </div>
  );
};

export default Loading;
