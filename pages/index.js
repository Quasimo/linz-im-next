import Head from 'next/head';
import Footer from '../components/footer'

export async function getStaticProps() {
  return { props: {} }
}

const avatar = `https://web3-images-api.kibalabs.com/v1/accounts/${process.env.WALLET}/image`;

const email = process.env.EMAIL;

function mailTo(email) {
  return 'mailto:' + email
}

// const doServerSideStuff = () => {
//   let zhihu = require('zhihu');
//   let username = 'linz';
// }

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>{process.env.SUBTITLE}_{process.env.TITLE}_{process.env.DESCRIPTION}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img alt={process.env.TITLE} src={avatar} width="160" height="auto" className="mb-3 rounded" />
        <h1 className="title">
        {process.env.TITLE}
        </h1>
        <h2>{process.env.SUBTITLE}</h2>

        <p className="description">
        {process.env.DESCRIPTION}
        </p>
        <div className="grid">
          <a href={mailTo(email)} className="card">
          {process.env.EMAIL}
          </a>
        </div>
        
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
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .mb-3 {
          margin-bottom: 3rem
        }

        .rounded {
          border-radius: 10px
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
