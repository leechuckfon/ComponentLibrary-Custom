import { Button } from "@mantine/core";
import styles from "./expander.module.scss";
import { useState } from "react";

export function Expander() {
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
        <div className={styles.expander__item}>Expand Item 1</div>
        <div className={styles.expander__item}>Expand Item 2</div>
        <div className={styles.expander__item}>Expand Item 3</div>
        <div className={styles.expander__item}>Expand Item 4</div>
        <div className={styles.expander__item}>Expand Item 5</div>
      </div>
    </div>
  );
}
