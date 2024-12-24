import React from "react";
import InstagramEmbed from "../../components/Socials/Instagram/InstagramEmbed";
import "./style.scss";

const Blog = () => {
  const postUrls = [
    "https://www.instagram.com/p/DDvGjlVSD0b/",
    "https://www.instagram.com/p/DDp7V9uyp-R/",
    "https://www.instagram.com/p/DC5E7lJyiqk/",
  ];

  return (
    <div>
      <h2>Últimos Posts no Instagram</h2>
      <InstagramEmbed postUrls={postUrls} />
    </div>
  );
};

export default Blog;
