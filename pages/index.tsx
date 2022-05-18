import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import TitleCard from "../components/cards/titleCard";

const Home: NextPage = () => {
  return (
    <div className="bg-sky-400 h-screen">
          <TitleCard />
    </div>
  );
};

export default Home;
