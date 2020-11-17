import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

export default function Home() {
  const photos = [
    {
      src:
        "https://lh3.googleusercontent.com/pw/ACtC-3esf0LNJsFUfAcD7FYZyJBD4sWdvzZ0IBNTaEJFoTUONxIX8DWeGiwI6mWO0sNy2-soz532rQFx9ED_ST5edDdytEj_EVRZXTSajsKfPdEePC5xrI0huMioQfKfPxMnuyaxlqYwOS7pHoP6nyqQ9dOZvw=w2188-h1640-no?authuser=0",
      width: 4,
      height: 3,
    },
    {
      src:
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/65307431_10219352297696985_8006943316153204736_n.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=xhKDpLjB82AAX-gpTNM&_nc_ht=scontent-sjc3-1.xx&oh=dc6599b37d6e6300c92cbd1fd9131362&oe=5FDA673B",
      width: 4,
      height: 3,
    },
    {
      src:
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/65386349_10219352303977142_3084135871167856640_n.jpg?_nc_cat=109&ccb=2&_nc_sid=0debeb&_nc_ohc=ysImp38UcgoAX-JTC-g&_nc_ht=scontent-sjc3-1.xx&oh=7a15f1fab9c8e3f3253cf629e41165f6&oe=5FD9F356",
      width: 4,
      height: 3,
    },
    {
      src:
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/65216977_10219352302617108_1764445270403186688_n.jpg?_nc_cat=109&ccb=2&_nc_sid=0debeb&_nc_ohc=lhJl6LHjXeMAX-j8Epr&_nc_ht=scontent-sjc3-1.xx&oh=6749497e78d83d3a904e506efba71d99&oe=5FD9B613",
      width: 2.5,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
      width: 4927,
      height: 1000,
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3,
    },
  ];

  const BasicRows = () => <Gallery photos={photos} />;

  return (
    <div className={styles.container}>
      <Head>
        <title>1530 Vallejo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to 1530 Vallejo</h1>

        <p className={styles.description}>Forever our home</p>

        <BasicRows />

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        Powered by <span className={styles.code}>Next.js</span>
      </footer>
    </div>
  );
}
