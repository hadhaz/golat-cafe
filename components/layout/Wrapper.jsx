import { Provider } from "react-redux";
import { store } from "../../context/store";
import Navbar from "../header/Navbar";
import Reminder from "../modal/Reminder";
import CoffeeOverlay from "../main/Overlay";
import Head from "next/head";

export default function Wrapper({ children }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Golat Cafe</title>
        <meta
          name='description'
          content='Golat Cafe, Co-working Space, and Live Music'
        />
        <link rel='icon' href='/coffee.ico' />
      </Head>
      <Navbar />
      <CoffeeOverlay top={"80px"} />
      <Reminder />
      {children}
    </Provider>
  );
}
