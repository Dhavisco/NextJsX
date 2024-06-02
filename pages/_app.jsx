import "../app/globals.css"; // Adjust the path as necessary
import RootLayout from "../app/layout"; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
