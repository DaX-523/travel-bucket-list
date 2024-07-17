import Head from "next/head";

import styles from "../styles/page.module.scss";
import Layout from "@/ui/components/Layout";
import Section from "@/ui/components/Section";
import Container from "@/ui/components/Container";
import Map from "@/ui/components/Map";
import Button from "@/ui/components/Button";
import BucketList from "@/ui/components/BucketList";

const DEFAULT_CENTER = [38.907132, -77.036546];

export default function Home({ destinations }) {
  return (
    <Layout>
      <Head>
        <title>Travel Bucket List</title>
        <meta name="description" content="Travel Bucket List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>Travel Bucket List</h1>

          <Map
            className={styles.homeMap}
            width="800"
            height="400"
            center={DEFAULT_CENTER}
            zoom={12}
          ></Map>

          <p className={styles.view}>
            <Button href="https://github.com/DaX-523/travel-bucket-list">
              Vew on GitHub
            </Button>
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>Destinations</h2>
          <BucketList />
        </Container>
      </Section>
    </Layout>
  );
}
