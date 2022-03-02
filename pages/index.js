import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
    const [x, setX] = useState(null);

    useEffect(() => {
        setX(navigator);
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>idk</title>
            </Head>
            <h1>PLATFORM: {x?.platform}</h1>
            <h1>USERAGENT: {x?.userAgentData?.platform || x?.platform || "UNKNOWN"}</h1>
        </div>
    );
}
