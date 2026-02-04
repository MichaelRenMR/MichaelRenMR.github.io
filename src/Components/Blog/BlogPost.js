import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/github.css";       // light
import "highlight.js/styles/github-dark.css";  // dark
import postsMeta from './postsMeta'

export default function BlogPost() {
  const { slug } = useParams()
  const history = useHistory()
  const [content, setContent] = useState(null)

  useEffect(() => {
    const meta = postsMeta.find((p) => p.slug === slug)
    if (!meta) return

    let context = null
    try {
      context = require.context('../../blog-posts', false, /\.md$/)
    } catch (err) {
      console.warn('No blog-posts directory found')
    }

    async function load() {
      const key = `./${meta.file}`
      if (context && context.keys().includes(key)) {
        const url = context(key)
        const resp = await fetch(url)
        const text = await resp.text()
        setContent(text)
      } else {
        setContent('# Post not found')
      }
    }
    load()
  }, [slug])

  const meta = postsMeta.find((p) => p.slug === slug)
  if (!meta) return <div style={{padding:20}}>Post not found. <button className="back-link-button" onClick={() => history.push('/blog')}>Back to blog</button></div>

  // try to load image from src/Images if provided in metadata
  let headerImage = null
  try {
    const imgContext = require.context('../../Images', false, /\.(png|jpe?g|gif|svg)$/)
    if (meta.image && imgContext.keys().includes(`./${meta.image}`)) {
      headerImage = imgContext(`./${meta.image}`)
    }
  } catch (e) {
    // ignore
  }
  

  return (
    <div className="blog-post" style={{padding: 20}}>
      <div className="blog-post-header">
        <button className="back-link-button" onClick={() => history.push('/blog')}>← Back</button>
        {headerImage && <img src={headerImage} alt={meta.title} className="post-header-image"/>}
        <div className="blog-post-title">
          <h1 style={{margin:0}}>{meta.title}</h1>
          <p style={{color: 'gray', margin: '4px 0 0 0'}}>{meta.summary}</p>
        </div>
      </div>
      <hr/>
      {content ? (
        <div className="blog-post-body">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
