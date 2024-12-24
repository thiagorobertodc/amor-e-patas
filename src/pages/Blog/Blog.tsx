import React, { useEffect } from "react";
import "./style.scss";

const Blog = () => {
  useEffect(() => {
    // Add scroll class for Blog
    document.body.classList.add("blog-scroll");

    // Check if Instagram script is already loaded
    if (window.instgrm) {
      // Reprocess Instagram embeds
      window.instgrm.Embeds.process();
    } else {
      // Load script only if not present
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      script.onload = () => {
        window.instgrm.Embeds.process(); // Process after loading
      };
      document.body.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("blog-scroll");
    };
  }, []); // Only run once on mount

  return (
    <div className="blog-container">
      <h2 className="title">Últimos Posts no Instagram</h2>
      <div className="instagram-posts">
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
