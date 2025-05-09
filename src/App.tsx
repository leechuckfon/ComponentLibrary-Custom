import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Paper, Text } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MantineProvider>
        <div className="container">
          <div className="container__title">This is a Very Long Title</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mattis lacus nec ante ultrices auctor. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Morbi
            eros massa, ultrices sit amet libero nec, iaculis molestie urna.
            Aenean et dapibus sapien. Nulla mollis enim risus, in lacinia dolor
            finibus eget. Morbi porttitor elit nec urna molestie, sit amet
            rutrum ipsum lacinia. Cras condimentum rhoncus congue.
          </p>

          <p>
            Sed quis laoreet velit. Aenean et magna condimentum, posuere quam
            vel, semper leo. Nunc elementum lorem sit amet neque posuere
            efficitur. Curabitur laoreet, risus ut fringilla semper, leo eros
            commodo erat, sit amet iaculis enim urna sit amet turpis. Fusce id
            sem in diam laoreet egestas. In eget tempor mi. In vulputate orci
            nec lacus auctor iaculis. Cras non ligula id lorem sollicitudin
            aliquam. Maecenas in leo cursus, laoreet nibh euismod, porta arcu.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            commodo elit, vel gravida dui. Nulla lobortis commodo iaculis.
            Maecenas placerat est elit, ac finibus felis aliquam a. Curabitur
            ipsum mi, porta eget tellus sed, consequat ornare ligula. Nunc
            interdum quam a eleifend ullamcorper. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          <p>
            Pellentesque pretium quam id metus porta, id sagittis est efficitur.
            Etiam aliquet dignissim massa nec elementum. Mauris at sapien ex.
            Mauris eleifend, arcu et pretium blandit, orci arcu volutpat lorem,
            vitae mollis erat ipsum vel purus. Integer quis justo enim. Cras ac
            mi a lorem vestibulum vulputate. Nunc consequat nunc at dapibus
            tincidunt. Cras ut cursus nisl. Curabitur metus felis, cursus id dui
            et, pulvinar aliquet ante. Curabitur et est id dolor porta malesuada
            eu eu nulla. Aenean rhoncus rutrum lorem, et interdum tortor
            vestibulum quis. Donec eget turpis interdum, tempor justo vel,
            dictum sapien. Ut a sapien et nisl placerat lobortis. In facilisis
            libero nec eleifend blandit. Duis finibus, odio non tristique
            gravida, orci tellus rhoncus felis, in sagittis mauris metus a quam.
          </p>
        </div>
      </MantineProvider>
    </>
  );
}

export default App;
