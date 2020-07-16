import { ThemeProvider } from "styled-components";
import axios from "axios";
import { AuthProvider } from "../contexts/AuthContext";
import Layout from "../components/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

axios.defaults.baseURL = "http://localhost:3000/api";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
