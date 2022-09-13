import Head from 'next/head'
import Footer from '../components/Footer'
import { client } from '../lib/apollo'
import { gql } from '@apollo/client'
import { Text, Link } from '@geist-ui/core';

export default function SlugPage({ post }) {

  return (
    <div className="container">
      <Head>
        <title>{post.title}_{process.env.NEXT_PUBLIC_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div className="siteHeader">
            <h1 className="title">
                {post.title}
            </h1>
            <Text small type="secondary">{ new Date(post.date).toLocaleDateString() }</Text>
          </div>
            <article dangerouslySetInnerHTML={{__html: post.content}}>   
            </article>
      </main>

      <Footer></Footer>

      <style jsx>{`
        .container {
          background: rgb(255,255,255);
          background: -moz-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%);
          background: -webkit-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%);
          background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#eeeeee",GradientType=1);
          min-height: 100vh  
        }
        main {
          max-width: 990px;
          margin: 0 auto;
        }
        .siteHeader {
          padding: 2rem 1rem 1rem;
        }
        article {
          padding: 1rem 1rem 2rem;
        }
        .text-start {
          text-align: start
        }
        ul{
          padding-left: 1rem
        }
      `}</style>

    </div>
  )
}


export async function getStaticProps({ params }){
  const GET_POST_BY_URI = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        content(format: RENDERED)
        date
        uri
        slug
        author {
          node {
            firstName
            lastName
          }
        }
      }
    }  
  `
  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.slug
    }
  })
  // const response = await getPostByUri(params.uri)
  const post = response?.data?.post
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths(){
    const paths = []
    return {
        paths,
        fallback: 'blocking'
    }
}