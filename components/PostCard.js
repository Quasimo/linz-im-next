import Link from "next/link"
import { Card, Image, Text } from '@geist-ui/core';

export default function PostCard ({ post }){
    return (

<Card shadow width="100%">
  {/* <Link block href={post.uri}><Image  src={post.featuredImage.node.sourceUrl}
   draggable={false} /></Link> */}
  <Text h4 mb={0}>
    <a target="_blank" href={post.link} rel="noopener noreferrer">
      {post.title}
    </a>
  </Text>
  <Text small type="secondary"><div dangerouslySetInnerHTML={{__html: post.excerpt}}/></Text>
</Card>        

        // <Link href={post.uri} className={"card"}>
        //     <a className="card">
        //         <h3>{post.title} &rarr;</h3>
        //     </a>
        // </Link>
    )
}