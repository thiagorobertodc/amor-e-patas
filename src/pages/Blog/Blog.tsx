import React, { useEffect, useState } from "react";
import "./style.scss";
import Loading from "../../components/Loading/Loading"; // Import your loading component

const Blog = () => {
  const [loading, setLoading] = useState(true); // Use state for loading

  useEffect(() => {
    // Add scroll behavior for Blog page
    document.body.classList.add("blog-scroll");

    // Load Instagram script or reprocess embeds
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      script.onload = () => {
        window.instgrm.Embeds.process(); // Process embeds after loading script
      };
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process(); // Process if already loaded
    }

    // Simulate loading effect (3 seconds)
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
      window.instgrm.Embeds.process(); // Ensure embeds are processed
    }, 3000);

    // Cleanup scroll behavior and timer
    return () => {
      document.body.classList.remove("blog-scroll");
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="blog-container">
      {loading && <Loading onLoaded={() => {}} />}
      <div className={`instagram-posts ${loading ? "loading" : ""}`}>
        <div className="instagram-card">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DDvGjlVSD0b/"
            data-instgrm-version="14"
          ></blockquote>
        </div>
        <div className="instagram-card">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DDp7V9uyp-R/"
            data-instgrm-version="14"
          ></blockquote>
        </div>
        <div className="instagram-card">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DC5E7lJyiqk/"
            data-instgrm-version="14"
          ></blockquote>
        </div>
      </div>
    </div>
  );
};

export default Blog;
