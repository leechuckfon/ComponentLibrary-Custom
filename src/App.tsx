import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BorderedContainer } from "./components/bordered-text/bordered-text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MantineProvider>
        <BorderedContainer title="This is a Very Long Title Test"></BorderedContainer>
      </MantineProvider>
    </>
  );
}

export default App;
