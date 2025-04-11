"use client";
import Image from "next/image";
import styles from "./productDetail.module.scss";
import Text from "@/src/components/Text/Text";
import {
  TextColors,
  TextSizes,
  TextWeights,
} from "@/src/components/Text/types";
import { LOREM } from "./types";
import Button from "@/src/components/Button/Button";
import { ButtonVariant } from "@/src/components/Button/types";

export default function ProductDetail() {
  return (
    <div className={styles.productDetailWrapper}>
      <div className={styles.productDetailInfo}>
        <div className={styles.productImage}>
          <Image
            className={styles.productItemImage}
            src={"/ipod2.jpg"}
            alt="litem"
            width={680}
            height={700}
          />
        </div>
        <div className={styles.productDetaiSummary}>
          <div className={styles.productDetailCondition}>
            <Text fontSize={TextSizes.SM} value={"Nuevo - 234 vendidos"} />
          </div>
          <div className={styles.productDetailPrice}>
            <Text
              fontSize={TextSizes.XL_2}
              fontWeight={TextWeights.W600}
              value={"Deco Reverse Sombrero Oxford"}
            />
            <Text fontSize={TextSizes.CUSTOM_46} value={"$ 1980"} />
            <Button
              variant={ButtonVariant.Primary}
              label={"Comprar"}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className={styles.productDetailDescription}>
        <Text
          fontSize={TextSizes.CUSTOM_28}
          value={"Descripción del producto"}
        />
        <Text color={TextColors.Secondary} value={LOREM} />
      </div>
    </div>
  );
}
