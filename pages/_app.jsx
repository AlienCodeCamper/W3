import "../styles/globals.css";
import { BaseContextProvider } from "../utils/BaseContext";

function MyApp({ Component, pageProps }) {
  return (
    <BaseContextProvider>
      <Component {...pageProps} />
    </BaseContextProvider>
  );
}

export default MyApp;
