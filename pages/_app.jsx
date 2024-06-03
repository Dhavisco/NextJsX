import "../app/globals.css"; // Adjust the path as necessary
import RootLayout from "../app/layout"; // Adjust the path as necessary
import Layout from '../components/layout/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
