import React, { useState } from "react";

function App() {
  const platforms = {
    Twitter: { limit: 280, media: "Images & Videos Allowed" },
    LinkedIn: { limit: 3000, media: "Professional Content" },
    Instagram: { limit: 2200, media: "Images Recommended" },
    Facebook: { limit: 63206, media: "Images, Videos & Text" },
  };

  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = platforms[platform].limit;
  const remaining = limit - post.length;

  return (
    <div className="container">
      <h1>Social Media Post Composer</h1>

      <label>Select Platform</label>

      <select
        value={platform}
        onChange={(e) => {
          setPlatform(e.target.value);
          setPost("");
        }}
      >
        {Object.keys(platforms).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <p className="rule">
        <strong>Media Rule:</strong> {platforms[platform].media}
      </p>

      <textarea
        placeholder="Write your post here..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <p className="counter">
        Characters: {post.length} / {limit}
      </p>

      {remaining >= 0 ? (
        <p className="success">{remaining} characters remaining</p>
      ) : (
        <p className="error">
          Character limit exceeded by {-remaining} characters
        </p>
      )}

      <button disabled={remaining < 0 || post.length === 0}>
        Publish Post
      </button>
    </div>
  );
}

export default App;