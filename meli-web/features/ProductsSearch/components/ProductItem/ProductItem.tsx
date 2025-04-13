import Image from "next/image";
import styles from "./productItem.module.scss";
import Text from "@/src/components/Text/Text";
import { TextSizes } from "@/src/components/Text/types";
import { ProductItemProps } from "./types";
import Link from "next/link";
import { formatPrice } from "@/utils/money";

export default function ProductItem(props: ProductItemProps) {
  const { item } = props;

  const formattedPrice = formatPrice(item.price.amount);

  return (
    <Link href={`items/${item.id}`}>
      <div className={styles.productItemWrapper}>
        <Image
          className={styles.productItemImage}
          src={`/mocked/${item.id}.webp`}
          alt={item.title}
          width={180}
          height={180}
        />
        <div className={styles.productInfo}>
          <div className={styles.productInfoDetail}>
            <div className={styles.productInfoPrice}>
              <Text fontSize={TextSizes.XL_2} value={formattedPrice} />
            </div>
            <div>
              <Text fontSize={TextSizes.LG} value={item.title} />
            </div>
            <div>
              <Text fontSize={TextSizes.LG} value={item.condition} />
            </div>
          </div>
          <div className={styles.productInfoLocation}>
            <Text fontSize={TextSizes.XS} value={item.location} />
          </div>
        </div>
      </div>
    </Link>
  );
}
