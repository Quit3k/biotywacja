import React from "react";
import styles from "../styles/legal.module.css";

interface Props {
  children: React.ReactNode;
}

const LegalWrapper = ({ children }: Props) => {
  return <div className={styles.legalWrapper}>{children}</div>;
};

export default LegalWrapper;
