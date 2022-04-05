import { Typography } from "@mui/material";
import { ReactElement } from "react";
import BackButton from "../../components/BackButton";
import SectionDescription from "../../components/SectionDescription";
import SectionHeader from "../../components/SectionHeader";
import SectionStack from "../../components/SectionStack";
import SampleComponent from "./tests/SampleComponent";

function Task3(): ReactElement {
  return (
    <SectionStack>
      <SectionHeader>Task 3 - Unit tests</SectionHeader>
      <SectionDescription> File `SampleClass.ts` and `SampleComponent.tsx` contain some failing unit tests. Your task is to fix them.</SectionDescription>
      <>
        <ul>
          <li>Run `npm test` in order to run unit tests</li>
          <li>Fix tests, which do not pass.</li>
        </ul>
      </>
      <Typography variant="h6">Sample component preview</Typography>
      <SampleComponent />
      <BackButton />
    </SectionStack>
  );
}

export default Task3;