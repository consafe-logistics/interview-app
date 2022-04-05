import { ReactElement } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import SectionStack from "../components/SectionStack";

function Home(): ReactElement {
  return (
    <SectionStack>
      <SectionHeader>Web Developer - Interview tasks</SectionHeader>
      <Link to='task-1'>Task 1</Link>
      <Link to='task-2'>Task 2</Link>
      <Link to='task-3'>Task 3</Link>
    </SectionStack>
  );
}

export default Home;