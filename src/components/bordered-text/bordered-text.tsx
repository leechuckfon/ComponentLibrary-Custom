import type { PropsWithChildren } from "react";
import styles from "./bordered-text.module.scss";

interface BorderedContainerProps extends PropsWithChildren {
  title: string;
}

export function BorderedContainer({ title, children }: BorderedContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <div className={styles.bl}></div>
        <div className={styles.bc}>
          <span className={styles.container__title__text} id="title">
            {title}
          </span>
        </div>
        <div className={styles.br}></div>
      </div>
      <div className={styles.container__content}>
        {children}
      </div>
    </div>
  );
}
