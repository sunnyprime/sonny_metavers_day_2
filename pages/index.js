import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <h1>Welcome to hello world!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
