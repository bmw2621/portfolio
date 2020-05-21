import React from "react"
import { useStaticQuery } from 'gatsby'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faDev } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query BlogPosts {
      allDevArticles {
        nodes {
          article {
            title
            published_at
            url
            positive_reactions_count
          }
        }
      }
    }   
  `)
 
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {posts.allDevArticles.nodes.map(article => {
        const articleDate = new Date(Date.parse(article.article.published_at))
        return(
          <a href={article.article.url} className="article">
            <div className="articleIcon"><FontAwesomeIcon icon={faDev} size='3x' /></div>
            <div className="articleData">
              <span className='blogTitle'>{article.article.title}</span>
              <span className='blogDate'>{`${articleDate.toDateString()}`}</span>
              <span><FontAwesomeIcon icon={faHeart}/>{article.article.positive_reactions_count}</span>
            </div>
          </a>
        )
      })}  
    </Layout>
  )
}

export default BlogPage
