import React, { useEffect } from "react";
import loadingImg from "../../assets/images/loading.png";
import "./style.scss";

interface LoadingProps {
  onLoaded: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 800);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="loading-container">
      <img src={loadingImg} alt="Loading" className="loading-image" />
    </div>
  );
};

export default Loading;
