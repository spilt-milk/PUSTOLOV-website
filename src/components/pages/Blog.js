import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer';
import '../Blog.css';

export default function Blog() {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/874')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setPage(data))
      .catch(err => setError(err.message));
  }, []);

  // Linkovi se otvaraju na novom pageu
  useEffect(() => {
    if (contentRef.current) {
      const links = contentRef.current.querySelectorAll('a');
      links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      });
    }
  }, [page]);

  return (
    <div className="blog-section">
      <div className="blog-content">
        <h1 className="blog-title">Blog</h1>
        {error && <p style={{color: 'red'}}>Error: {error}</p>}
        {!page && !error && <p>Loading...</p>}
        {page && (
          <div>
            <h2 className="blog-post-title" dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
            <div
              className="blog-post-content"
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}