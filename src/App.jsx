import Head from "./Components/Head";
import MyForm from "./Components/MyForm";
import MyTable from "./Components/MyTable";
import { useState } from "react";

function App() {
  const [updatedUsersList, setUsersList] = useState([]);
  const addNewUserHandler = (data) => {
    if (
      updatedUsersList.some(
        (item) =>
          item.name === data.name &&
          item.password === data.password &&
          item.email === data.email
      )
    ) {
      alert("Data is already found in the table");
    } else {
      setUsersList((prev) => {
        return [data, ...prev];
      });
    }
  };
  return (
    <div className="App">
      <Head />
      <MyForm
        onAddNewUser={addNewUserHandler}
        currentList={updatedUsersList}
      ></MyForm>
      <MyTable tableContent={updatedUsersList}></MyTable>
    </div>
  );
}

export default App;
