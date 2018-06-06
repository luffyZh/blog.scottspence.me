import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ allPosts }) => (
  <section>
    <ul className="home-ul">
      {allPosts.map(post => (
        <li className="home-li" key={post.id}>
          <Link to={`/${post.slug}`} className="home-link">
            <h3>{post.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  </section>
))
