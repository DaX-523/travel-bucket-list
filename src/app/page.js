import Head from "next/head";

import styles from "../styles/page.module.scss";
import Layout from "@/ui/components/Layout";
import Section from "@/ui/components/Section";
import Container from "@/ui/components/Container";
import Map from "@/ui/components/Map";
import Button from "@/ui/components/Button";

const DEFAULT_CENTER = [38.907132, -77.036546];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js Leaflet Starter</title>
        <meta
          name="description"
          content="Create mapping apps with Next.js Leaflet Starter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>Next.js Leaflet Starter</h1>

          <Map
            className={styles.homeMap}
            width="800"
            height="400"
            center={DEFAULT_CENTER}
            zoom={12}
          ></Map>

          <p className={styles.view}>
            <Button href="https://github.com/colbyfayock/next-leaflet-starter">
              Vew on GitHub
            </Button>
          </p>
        </Container>
      </Section>
    </Layout>
  );
}
