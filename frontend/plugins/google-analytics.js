// plugins/google-analytics.js

export default ({ app }) => {
    // Google Analytics script
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', process.env.googleAnalyticsID);
  
    // Inject the script into the page
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-D5Z2SK35B5`;
    document.head.appendChild(script);
  };
  