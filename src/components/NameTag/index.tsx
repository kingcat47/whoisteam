import styles from "./styles.module.scss";
interface NameTagProps {
  name: string;
  className?: string;
}
export default function NameTag({ name, className }: NameTagProps) {
  return (
    <>
      <div className={[styles.container, className].join(" ")}>
        <p className={styles.text}>{name}</p>
      </div>
      ;
    </>
  );
}
