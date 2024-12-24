import React, { useEffect } from "react";
import "./style.scss"; // Add styles for the loader

interface LoadingProps {
  onLoaded: () => void; // Callback when loading finishes
}

const Loading: React.FC<LoadingProps> = ({ onLoaded }) => {
  // Simulate loading time (e.g., 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded(); // Trigger parent callback when loading ends
    }, 2000);

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
