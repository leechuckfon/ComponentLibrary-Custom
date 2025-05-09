import { Button } from "@mantine/core";
import styles from "./expander.module.scss";
import { useState, type PropsWithChildren } from "react";

export function Expander({children} : PropsWithChildren) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.expander__container}>
      <Button
        className={styles.expander__button}
        onClick={() => setOpen(!open)}
      >
        <span
          className={[
            styles.expander__arrow,
            open ? styles["expander__arrow--active"] : "",
          ].join(" ")}
        >
          {"<"}
        </span>
      </Button>
      <div
        className={[
          styles.expander__item__list,
          open ? styles["expander__item__list--open"] : "",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
