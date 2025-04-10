import Image from "next/image";
import styles from "./productItem.module.scss";

export default function ProductItem() {
  return (
    <div className={styles.productItemWrapper}>
      <Image
        className={styles.productItemImage}
        src={"/ic_search.png"}
        alt="litem"
        width={180}
        height={180}
      />
      <div className={styles.productInfo}>
        <div className={styles.productInfoDetail}>
          <div className={styles.productInfoPrice}>price</div>
          <div>descrip</div>
        </div>
        <div className={styles.productInfoLocation}>location</div>
      </div>
    </div>
  );
}
