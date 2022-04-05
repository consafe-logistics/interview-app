import { ReactElement } from "react";
import MockImplementation from "./components/MockImplementation";
import MockImage from "./assets/select_queue.png";
import BackButton from "../../components/BackButton";
import MockPreview from "../../components/MockPreview";
import SectionDescription from "../../components/SectionDescription";
import SectionHeader from "../../components/SectionHeader";
import SectionStack from "../../components/SectionStack";

function Task2(): ReactElement {
  return (
    <SectionStack>
      <SectionHeader>Task 2 - Component implementation</SectionHeader>
      <SectionDescription>
        Implement component illustrated in the design mock. Component should 
        contain static app-bar (no interaction is required) and component with 
        list of pick queues. It should be possible to click on any item in the list 
        and change its status from inactive to active. By default first item in 
        the list should be active.
      </SectionDescription>
      <>
        <ul>
          <li>Not matching fonts can be disregarded</li>
          <li>Implementation does not need to be 'pixel perfect' by any means, it should be look-alike</li>
          <li>Preferably use MUI library, which is already added to the project</li>
          <li>Necessary assets (icons) can be found in `assets` directory</li>
          <li>Styles:</li>
          <ul>
            <li>Toolbar elevation level: 4</li>
            <li>Toolbar bottom radius: 12px</li>
            <li>Active item border: #1D5F83</li>
            <li>Active item icon background: #5DABC7</li>
            <li>Active item border radius: 12px</li>
          </ul>
        </ul>
      </>
      <MockPreview image={MockImage} implementation={<MockImplementation />} />
      <BackButton />
    </SectionStack>
  );
}

export default Task2;