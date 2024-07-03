import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-ico" href='/logo.ico' />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@1.0.1/css/bulma.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="https://cdn.tailwindcss.com"></script>
    </Html>
  );
}
