import Head from "next/head";
import Navbar from "../components/header/Navbar";
import Main from "../components/main/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Galat Cafe</title>
        <meta
          name='description'
          content='Galat Cafe, Co-working Space, and Live Music'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Main />
    </>
  );
}
