import Image from "next/image";
import styles from "./productItem.module.scss";
import Text from "@/src/components/Text/Text";
import { TextSizes } from "@/src/components/Text/types";

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
          <div className={styles.productInfoPrice}>
            <Text fontSize={TextSizes.XL_2} value={"$1.980"} />
          </div>
          <Text
            fontSize={TextSizes.LG}
            value={
              "Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!"
            }
          />
        </div>
        <div className={styles.productInfoLocation}>
          <Text fontSize={TextSizes.XS} value={"Capital Federal"} />
        </div>
      </div>
    </div>
  );
}
