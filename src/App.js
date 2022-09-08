import { Container } from "@mui/material";
import Header from "./components/header/Header";
import Weather from "./pages/localWeatherInfo/Weather";

function App() {
  return (
    <>
      <Header />
      <Container as="main" maxWidth="xlg">
        {/* <Routes /> */}
        <Weather />
      </Container>
    </>
  );
}

export default App;
