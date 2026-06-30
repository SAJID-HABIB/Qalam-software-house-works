import { use, useState } from "react";


function InputForm(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      alert("please enter the name");
      return;
    }
    props.addUser(name);
    setName("");
  }

return (
  <>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => (e.target.value)}/>
    <button type="submit">Add</button>
  </form>
  </>
)

}

export default InputForm;