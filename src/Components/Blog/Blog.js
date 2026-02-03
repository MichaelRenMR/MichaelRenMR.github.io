import React from 'react'
import { Link } from 'react-router-dom'
import postsMeta from './postsMeta'

// require.context for images placed in src/Images
let imagesContext = null
try {
  imagesContext = require.context('../../Images', false, /\.(png|jpe?g|gif|svg)$/)
} catch (e) {
  imagesContext = null
}

export default function Blog() {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <hr/>
      {postsMeta.length === 0 ? (
        <p>No posts found. Add markdown files to <code>src/blog-posts/</code> and add entries to <code>src/Components/Blog/postsMeta.js</code>.</p>
      ) : (
        <div className="posts">
          {postsMeta.map((post) => {
            const imgKey = post.image ? `./${post.image}` : null
            const imgSrc = imagesContext && imgKey && imagesContext.keys().includes(imgKey) ? imagesContext(imgKey) : null
            return (
              <div key={post.slug} className="post">
                {imgSrc && <img src={imgSrc} alt={post.title} className="post-thumb" />}
                <div className="post-meta">
                  <h2>
                    <Link to={`/blog/${post.slug}`} style={{textDecoration: 'none'}}>{post.title}</Link>
                  </h2>
                  <p style={{color: 'gray'}}>{post.summary}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
