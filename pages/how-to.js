import Head from 'next/head';
import Footer from '../components/footer';
export async function getStaticProps() {
  return { props: {} }
}
const page = {
  title: "如何用 Fleek 在 IPFS 上托管个人主页"
}

const email = process.env.EMAIL;
function HowTo() {
  return (
    <div className="container">
      <Head>
        <title>{page.title}_{process.env.TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{page.title}</h1>
        <div className="fullWidth">
          <div className="card">
            <h3>1. 代码：</h3>
            <h4>在 Github 上 fork 这个项目:</h4>
            <a target="_blank" href="https://github.com/Quasimo/linz-im-next">Quasimo/linz-im-next</a>
            <ul>
              <li>登录 Github;</li>
              <li>Fork <a target="_blank" href="https://github.com/Quasimo/linz-im-next">Quasimo/linz-im-next</a> 到你的仓库;</li>
              <li><code>git clone</code> 你仓库里的 <code>linz-im-next</code> 这个项目;</li>
              <li>修改这个文件：<code>.env.local</code> 和 <code>.env</code>;</li>
              <li><code>git add</code> => <code>git commit</code> => <code>git push</code>。</li>
            </ul>            
          </div>
          <div className="card">
            <h3>2. 托管</h3>
            <h4><a target="_blank" href="https://fleek.co">Fleek <small>(fleek.co)</small></a></h4>
            <ul>
              <li>注册</li>
              <li>登录</li>
              <li><strong>Add New Site</strong></li>
              <li><strong>Connect with github</strong>，选择该 repo，点击；</li> 
              <li>Hosting Services 选 <strong>IPFS</strong> 然后点击 <code>Continue</code>；</li> 
              <li>来到 Hosting 流程第4步 <strong>Build options, and deploy!</strong>，<strong>Basic build settings</strong> 里的 <strong>Framework</strong> 选择 <strong>NextJS</strong> 其他保持默认，点 <code>Deploy site</code>。</li> 
            </ul>
          </div>
          <div className="card">
            <h3>3. 域名</h3>
            <ul>
              <li>fleek后台：Hosting => SETTINGS => Domains</li>
              <ol>
              <li><strong>自定义域名</strong>：<code>Add Custom Domain</code> 然后输入域名并完成 DNS 解析</li>
              <li><a target="_blank" href="https://ens.domains/cn/"><strong>ENS</strong>(<small>ens.domains</small>)</a></li>
              <li><strong>HNS</strong></li>
              </ol>
            </ul>
          </div>
          <div className="card">
            <h3>4. ETH</h3>
            <p>在 ENS 注册域名需要用 ETH 支付。</p>
            <h4>ETH 购买渠道：</h4>
            <ul>
              <li><a target="_blank" href="https://localcryptos.com/r/linuximo"><strong>LocalCryptos</strong>(<small>localcryptos.com</small>)</a></li>
            </ul>
          </div>
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
          background: #ffedd3;
          border-radius: 5px;
          padding: 0.25rem;
          font-size: 0.9rem;
          font-weight: bold;
          color: #333;
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
          color: #000;
          border-color: #000;
        }

        .card:hover a{
          color: green
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

        .fullWidth {
          width: 100%          
        }
        .fullWidth .card {
          width: 100%;
          margin: 1rem 0;
        }

        li {
          margin: 0.5rem 0
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

export default HowTo