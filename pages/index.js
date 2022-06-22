import Head from 'next/head';
import Footer from '../components/footer';
import { Mail } from '@geist-ui/icons';
import { Button, Page, Text, Card, Link, Grid, Spacer, Image, User } from '@geist-ui/core';
import { DETAILS, ZHIHU, SOCIALS } from '../config';
// import React, { useEffect, useState } from "react";

const avatar = `https://web3-images-api.kibalabs.com/v1/accounts/${DETAILS.WALLET}/image`;
const email = DETAILS.EMAIL;

function mailTo(email) {
  return 'mailto:' + email
}

// zhihu.User.info(username).then(function(user){}

// const doServerSideStuff = () => {
//   let zhihu = require('zhihu');
//   let username = 'linz';
// }

let zhihu = require('zhihu');
export async function getStaticProps(context) {
  const user = await zhihu.User.info(ZHIHU.user);
    return {
      props: {
        user
      }, // will be passed to the page component as props
    };
}

export default function Home({user}) {
  
  return (
    <div className="container home">
      <Head>
        <title>{DETAILS.SUBTITLE}_{DETAILS.TITLE}_{DETAILS.DESCRIPTION}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
          <img alt={DETAILS.TITLE} src={avatar} width="78" height="auto" className="avatar rounded" />
          <Text h1>{DETAILS.TITLE}</Text>
      </header>
      <main>
        <Text h2>{DETAILS.SUBTITLE}</Text>
        <Text p>{DETAILS.DESCRIPTION}</Text>
        <Link block href={mailTo(email)}>
        <Mail size={36} />
        </Link>
        <Spacer h={1}/>
        <Card shadow>
          <div className="text-start">
          <User src="data:image/png;base64,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" name="知乎">
            <User.Link href={user.profileUrl} target="_blank">@{user.name}</User.Link>
            <Text p>{user.tagline}</Text>
            <ul>
                <li>职业: {user.work}</li>
                <li>回答: {user.answer}</li>
                <li>文章: {user.post}</li>
                <li>关注者: {user.follower}</li>
              </ul>
          </User>
          </div>
          <Card.Footer>
          <Link block color icon target="_blank" href={user.profileUrl}>我的知乎</Link>
          </Card.Footer>
        </Card>
        <Spacer h={2}/>   
        <Card shadow>
        {SOCIALS.map(social => (
        <User key={social} src={social.icon} name={social.social}>
          <User.Link block color icon target="_blank" href={social.url}>{social.id}</User.Link>
        </User>
        ))}
        </Card>
      </main>

      <Footer />



      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: rgb(255,255,255);
background: -moz-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%);
background: -webkit-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%);
background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#eeeeee",GradientType=1);
          background-image: url('/bg.jpg');
          background-position: center bottom;
          background-size: cover;
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
