import Form from "./Components/Form/Form";
import Heading from "./Components/Heading/Heading";
import Results from "./Components/Results/Results";
import "./styles.css";
import { useState } from "react";
const results = [];

export default function App() {
  const [resultsData, setResultsData] = useState(results);
  const submitHandler = (dataEntered) => {
    setResultsData((prevResults) => [...prevResults, dataEntered]);
  };
  return (
    <div className="App">
      <Heading />
      <Form onSubmitHandler={submitHandler} />
      <Results data={resultsData} />
    </div>
  );
}
