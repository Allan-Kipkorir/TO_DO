import { useState } from "react";
import "./Form.css";
const Form = (props) => {
  const [name, setName] = useState("");
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const dateHandler = (event) => {
    setDate(event.target.value.split("T")[0]);
    setTime(event.target.value.split("T")[1]);
  };
  const submitChangeHandler = (event) => {
    event.preventDefault();
    const Todos = {
      todoname: name,
      todotime: date,
      tododate: time
    };
    props.onSubmitHandler(Todos);
    setName("");
    setDate("");
  };
  return (
    <form onSubmit={submitChangeHandler} className="forminput">
      <div className="inputvalue">
        <label> TO-DO: </label>
        <input type="text" value={name} onChange={nameHandler} />
      </div>
      <div className="inputvalue">
        <label> DATE-TIME: </label>
        <input type="datetime-local" onChange={dateHandler} />
      </div>
      <div>
        <button type="submit"> Submit </button>
      </div>
    </form>
  );
};
export default Form;
