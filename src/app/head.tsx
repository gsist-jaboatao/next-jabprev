// app/head.tsx
import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Meu Site</title>
      <meta name="description" content="Meu site legal" />

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5XX7RLTEGY"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5XX7RLTEGY');
        `}
      </Script>
    </>
  );
}
