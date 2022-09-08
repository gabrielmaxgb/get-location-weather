import { Container } from "@mui/material";
import Header from "./components/header/Header";
import LocalWeatherInfo from "./pages/localWeatherInfo/LocalWeatherInfo";

function App() {
  return (
    <>
      <Header />
      <Container as="main" maxWidth="xlg">
        {/* <Routes /> */}
        <LocalWeatherInfo />
      </Container>
    </>
  );
}

export default App;
