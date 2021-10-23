import "public/scss/main.scss";
import { PageTransition } from "next-page-transitions";

function MyApp({ Component, pageProps }) {

  return (
    <PageTransition
      timeout={200}
      loadingDelay={100}
      classNames="page-transition"
    >
      <Component {...pageProps} />
    </PageTransition>
  );
}

export default MyApp;
