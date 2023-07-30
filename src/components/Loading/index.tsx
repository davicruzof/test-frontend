import styles from "./loading.module.css";
import * as S from "./styles";

export function Loading() {
  return (
    <S.Main>
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.Main>
  );
}
