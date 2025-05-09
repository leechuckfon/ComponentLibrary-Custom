import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Paper, Timeline, Text } from "@mantine/core";
import { BorderedContainer } from "./components/bordered-text/bordered-text";

function App() {
  return (
    <>
      <MantineProvider>
        <Timeline active={1} bulletSize={24} lineWidth={2} align="right">
          <Timeline.Item title="2020" __align="left">
            <Text>
              <BorderedContainer title="SomeTitle" borderColor="#5b8be2">
                <p>Here is something big</p>
              </BorderedContainer>
              <BorderedContainer title="SomeTitle" borderColor="#5b8be2">
                <p>Here is something big</p>
              </BorderedContainer>
              <BorderedContainer title="SomeTitle" borderColor="#5b8be2">
                <p>Here is something big</p>
              </BorderedContainer>
              <BorderedContainer title="SomeTitle" borderColor="#5b8be2">
                <p>Here is something big</p>
              </BorderedContainer>
              <BorderedContainer title="SomeTitle" borderColor="#5b8be2">
                <p>Here is something big</p>
              </BorderedContainer>
              <BorderedContainer title="SomeTitle" borderColor="#5b8be2">
                <p>Here is something big</p>
              </BorderedContainer>
            </Text>
          </Timeline.Item>
          <Timeline.Item title="2021"></Timeline.Item>
          <Timeline.Item title="2022"></Timeline.Item>
          <Timeline.Item title="2023"></Timeline.Item>
          <Timeline.Item title="2024"></Timeline.Item>
        </Timeline>
      </MantineProvider>
    </>
  );
}

export default App;
