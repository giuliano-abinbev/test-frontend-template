import logo from "$assets/logo.svg";
import { Container } from "@abi-labs-hexa/web-v2/components/grid";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <img src={logo} alt="logo" className={styles.logo} width={150} />
      </Container>
    </header>
  );
};
