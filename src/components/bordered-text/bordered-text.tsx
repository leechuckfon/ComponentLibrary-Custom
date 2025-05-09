import type { PropsWithChildren } from "react";
import styles from "./bordered-text.module.scss";

interface BorderedContainerProps extends PropsWithChildren {
  title: string;
  borderRadius?: string;
  borderColor?: string;
  borderThickness?: string;
  padding?: string;
}

export function BorderedContainer({
  title,
  borderRadius = "2ch",
  borderThickness = "2px",
  borderColor = "orange",
  padding = "5ch",
  children,
}: BorderedContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <div
          className={styles.bl}
          style={{
            border: `${borderThickness} ${borderColor} solid`,
            borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
          }}
        ></div>
        <div
          className={styles.bc}
          style={{
            borderBottom: `${borderThickness} ${borderColor} solid`,
            borderTop: `${borderThickness} transparent solid`,
          }}
        >
          <span className={styles.container__title__text} id="title">
            {title}
          </span>
        </div>
        <div
          className={styles.br}
          style={{
            border: `${borderThickness} ${borderColor} solid`,
            borderRadius: `0 ${borderRadius} ${borderRadius} 0`,
          }}
        ></div>
      </div>
      <div style={{ padding }}>{children}</div>
    </div>
  );
}
