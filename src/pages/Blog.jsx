import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../data/portfolio";
import "./Blog.css";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const Blog = () => {
  return (
    <main className="blog-page page-wrapper">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Writing</div>
          <h1 className="section-title">
            Thoughts on
            <br />
            <span className="gradient-text">Code & Craft</span>
          </h1>
          <p className="section-subtitle">
            Articles about my development journey, technical deep-dives, and
            lessons learned while building projects.
          </p>
        </motion.div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <motion.div
            className="blog-featured"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div
              className="blog-featured-accent"
              style={{ background: blogPosts[0].color }}
            />
            <div className="blog-featured-body">
              <div className="blog-featured-label">Latest Post</div>
              <h2 className="blog-featured-title">{blogPosts[0].title}</h2>
              <p className="blog-featured-excerpt">{blogPosts[0].excerpt}</p>
              <div className="blog-featured-meta">
                <span>{formatDate(blogPosts[0].date)}</span>
                <span className="blog-sep">·</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <div className="blog-tags">
                {blogPosts[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="blog-tag"
                    style={{ color: blogPosts[0].color, borderColor: `${blogPosts[0].color}30` }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button className="btn btn-primary blog-read-btn">
                Read Article →
              </button>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="blog-grid">
          {blogPosts.slice(1).map((post, i) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="blog-card-bar"
                style={{ background: post.color }}
              />
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>{formatDate(post.date)}</span>
                  <span className="blog-sep">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-tags" style={{ marginTop: 16 }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="blog-tag"
                      style={{ color: post.color, borderColor: `${post.color}30` }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="blog-card-footer">
                <button
                  className="blog-read-link"
                  style={{ color: post.color }}
                >
                  Read more →
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          className="blog-coming-soon"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span>✍️</span>
          <div>
            <h3>More articles coming soon</h3>
            <p>I write about web development, projects, and my CS journey.</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Blog;
