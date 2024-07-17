import useDestinations from "@/utils/fetchData";
import styles from "./bucketlist.module.scss";
import { unstable_noStore } from "next/cache";

const BucketList = async () => {
  unstable_noStore();
  const { destinations } = await useDestinations();
  return (
    <div className={styles.map}>
      {destinations?.map((dest) => {
        return (
          <div className={styles.item} key={dest?.id}>
            {dest?.name} ({dest?.location.latitude}, {dest?.location.longitude})
          </div>
        );
      })}
    </div>
  );
};

export default BucketList;
