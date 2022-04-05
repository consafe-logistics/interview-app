import { Accordion, AccordionSummary, Typography, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactElement } from "react";
import BackButton from "../../components/BackButton";
import SectionDescription from "../../components/SectionDescription";
import SectionHeader from "../../components/SectionHeader";
import SectionStack from "../../components/SectionStack";

function Task1(): ReactElement {

  const questions = [
    'What\'s the difference between a controlled and an uncontrolled component in React?',
    'Why do class methods need to be bound to a class instance in React?',
    'What are the rules that must be followed while using React Hooks?',
    'What is the purpose of clean-up function in useEffect hook? What can it be used for?',
    'Explain usage of the following hooks: useContext, useMemo, useRef, useImperativeHandle, useLayoutEffect.',
  ];

  return (
    <SectionStack>
      <SectionHeader>Task 1 - Technical questions</SectionHeader>
      <SectionDescription>Answer each of the questions below.</SectionDescription>
      <Box>
        {questions.map((question, index) =>
        (<Accordion key={index}>
          <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{`Question ${index + 1}`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question}</Typography>
          </AccordionDetails>
        </Accordion>))}
      </Box>
      <BackButton />
    </SectionStack>
  );
}

export default Task1;