import Image from "next/image";
import styles from "@/styles/page.module.scss";
import Button from "@/ui/components/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button href={"/"}>Hello</Button>
    </main>
  );
}
