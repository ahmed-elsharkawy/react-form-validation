import { useState } from "react";

const NewRow = (props) => {
  let [showPasswordState, setShowPasswordState] = useState(false);
  const showPassword = () => {
    setShowPasswordState(!showPasswordState);
  };
  return (
    <>
      {props.rowData.map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td className="d-flex justify-content-between">
              {(!showPasswordState &&
                [...item.password].map((item) => {
                  return "*";
                })) ||
                item.password}
              <i className="fa-solid fa-eye" onClick={showPassword}></i>
            </td>
            <td>{item.email}</td>
          </tr>
        );
      })}
    </>
  );
};

export default NewRow;
