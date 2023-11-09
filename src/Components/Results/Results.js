import { useState } from "react";
import "./Results.css";

const Results = (props) => {
  const { data } = props;

  // Array to store checkbox states for each item
  const [checkboxes, setCheckboxes] = useState(data.map(() => false));

  const strikeHandler = (index) => {
    // Create a copy of the checkboxes state array
    const newCheckboxes = [...checkboxes];
    // Toggle the checkbox state at the given index
    newCheckboxes[index] = !newCheckboxes[index];
    // Update the checkboxes state
    setCheckboxes(newCheckboxes);
  };

  const resultsData = data.map((results, index) => (
    <tbody key={index}>
      <tr className="rows">
        <input type="checkbox" onClick={() => strikeHandler(index)} />
        <td className={checkboxes[index] ? "strikethrough" : ""}>
          {results.todoname}
        </td>
        <td className={checkboxes[index] ? "strikethrough" : ""}>
          {results.tododate}
        </td>
        <td className={checkboxes[index] ? "strikethrough" : ""}>
          {results.todotime}
        </td>
      </tr>
    </tbody>
  ));

  return (
    <div className="results">
      <h1>TODO's</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Names</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        {resultsData}
      </table>
    </div>
  );
};

export default Results;
