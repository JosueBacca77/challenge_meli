"use client";
import { BreadCrumbProps } from "./types";
import styles from "./breadCrumb.module.scss";
import Text from "@/src/components/Text/Text";
import {
  TextColors,
  TextSizes,
  TextWeights,
} from "@/src/components/Text/types";
import Link from "next/link";

const SEARCH_REDIRECTION = "/items?search=";

export default function BreadCrumb(props: BreadCrumbProps) {
  const { items } = props;
  return (
    <div className={styles.breadCrumbWrapper}>
      {items.map((item: string, i: number, items: string[]) =>
        i === items.length - 1 ? (
          <Link href={`${SEARCH_REDIRECTION}${item}`} key={item}>
            <Text
              fontSize={TextSizes.SM}
              color={TextColors.Secondary}
              value={item}
              fontWeight={TextWeights.W600}
            />
          </Link>
        ) : (
          <div className={styles.categoryWrapper} key={item}>
            <Link href={`${SEARCH_REDIRECTION}${item}`}>
              <Text
                fontSize={TextSizes.SM}
                color={TextColors.Secondary}
                value={item}
              />
              <Text
                fontSize={TextSizes.SM}
                color={TextColors.Secondary}
                value={">"}
              />
            </Link>
          </div>
        )
      )}
    </div>
  );
}
