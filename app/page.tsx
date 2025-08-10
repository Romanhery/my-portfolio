import Head from "next/head";
import '@app/global.css'; // adjust path as needed


export default function HomePage() {
  return (
    <>
      <Head>
        <title>NetPlay</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Coding.gif" />
      </Head>

      <img className="img-gradient" src="/gradient.png" alt="gradient" />
      <div className="layer-blur"></div>

      <div className="container">
        <header>
          <h1 className="logo">CodeNest</h1>

          <nav>
            <a href="#">COMPANY</a>
            <a href="#">FEATURES</a>
            <a href="#">CONTACT</a>
            <a href="#">RESOURCES</a>
          </nav>

          <a href="login.html" className="btn-signin">
            SIGN IN
          </a>
        </header>

        <main>
          <div className="content">
            <div className="tag-box">
              <div className="tag">INTRODUCING |</div>
            </div>
            <h1>
              CodeSnippet
              <br />
              Collection for Developers
            </h1>
            <p className="description">Great snippets for everyone</p>

            <div className="buttons">
              <a href="#" className="btn-get-started">
                Documentation &gt;
              </a>
              <a href="sign-up.html" className="btn-signin-main">
                Get Started
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
