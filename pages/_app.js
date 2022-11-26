import "../styles/globals.css";
import StoreProvider, { wrapper } from "../context/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
