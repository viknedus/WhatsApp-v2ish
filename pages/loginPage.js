import { Button } from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import styles from "../styles/Home.module.css";
import Image from "next/Image";

function LoginPage() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login - WA V2</title>
      </Head>
      {/* Login Containter */}
      <LoginContainer>
        <WaLogo />
        <h4>Sign In or Log In</h4>
        <Button onClick={signIn} variant="outlined">
          with Google
        </Button>
      </LoginContainer>
      <footer className={styles.footer}>
        <a
          href="https://viknedus.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/pic1.png"
              alt="Viknedus Logo"
              width="15px"
              height="15px"
            />{" "}
            <label>viknedus</label>
          </span>
        </a>
      </footer>
    </Container>
  );
}

export default LoginPage;

// Styled CSS
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #e5ded8;
`;
// Login Container
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 8px 4px 14px -3px rgb(0, 0, 0, 0.7);
`;
const WaLogo = styled(WhatsApp)`
  height: 200px;
  width: 200px;
  color: green;
  margin-bottom: 50px;
`;
