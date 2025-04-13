"use client";
import Image from "next/image";
import styles from "./productDetail.module.scss";
import Text from "@/src/components/Text/Text";
import {
  TextColors,
  TextSizes,
  TextWeights,
} from "@/src/components/Text/types";
import Button from "@/src/components/Button/Button";
import { ButtonVariant } from "@/src/components/Button/types";
import useGetItemDescription from "./useGetItemDescription/useGetItemDescription";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ItemDescription } from "@/models/Item.model";
import { extractVisualDecimals, formatPrice } from "@/utils/money";

export default function ProductDetail() {
  const [item, setItem] = useState<ItemDescription | null>(null);
  const params = useParams();

  const id = typeof params.id === "string" ? params.id : "";

  const getItemDescription = useGetItemDescription(id);

  const formattedPrice = item ? formatPrice(item.price.amount) : "";

  const priceDecimals = item
    ? extractVisualDecimals(item.price.amount, item.price.decimals)
    : "";

  useEffect(() => {
    const itemResponse = getItemDescription.item;
    if (!itemResponse) return;
    setItem(itemResponse);
  }, [getItemDescription.item]);

  const conditionLabel = item
    ? `${item.condition} - ${item.sold_quantity} vendidos`
    : "";

  return (
    <div className={styles.productDetailWrapper}>
      {item && !getItemDescription.loading && (
        <>
          <div className={styles.productDetailInfo}>
            <div className={styles.productImage}>
              <Image
                className={styles.productItemImage}
                src={`/mocked/${item.id}.webp`}
                alt="litem"
                width={680}
                height={700}
              />
            </div>
            <div className={styles.productDetaiSummary}>
              <div className={styles.productDetailCondition}>
                <Text fontSize={TextSizes.SM} value={conditionLabel} />
              </div>
              <div className={styles.productDetail}>
                <Text
                  fontSize={TextSizes.XL_2}
                  fontWeight={TextWeights.W600}
                  value={item.title}
                />
                <div className={styles.productDetailPrice}>
                  <Text fontSize={TextSizes.CUSTOM_46} value={formattedPrice} />
                  <Text value={priceDecimals} />
                </div>

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
            <Text color={TextColors.Secondary} value={item.description} />
          </div>
        </>
      )}
      {!item && !getItemDescription.loading && <>NO SE HA ENCONTRADO EL ITEM</>}
      {!item && getItemDescription.loading && <>CARGANDO</>}
    </div>
  );
}
