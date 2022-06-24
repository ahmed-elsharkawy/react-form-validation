//
// const regex = /^[a-zA-Z ]{3,}$/;
// const regex = /^[a-zA-Z0-9]{5,}@[a-zA-Z]{3,}.com$/gm;
// const regex = /^[a-zA-Z0-9]{5,}$/gm;
//
import { Form, Col, Row, Button } from "react-bootstrap";
import React, { useState } from "react";

let validationState = {
  isNameValid: " ",
  isPasswordValid: " ",
  isEmailValid: " ",
};

//  //////////////    MyForm Component     ///////////////
const MyForm = (props) => {
  //set user name
  const [userName, setUserName] = useState();
  const getUserName = (e) => {
    setUserName(e.target.value);
    validationState.isNameValid = validateUserInput(
      e.target,
      /^[a-zA-Z ]{3,}$/
    );
  };

  //set user password
  const [userPassword, setUserPassword] = useState();
  const getUserPassword = (e) => {
    setUserPassword(e.target.value);
    validationState.isPasswordValid = validateUserInput(
      e.target,
      /^[a-zA-Z ]{3,}$/
    );
  };

  //set user email
  const [userEmail, setUserEmail] = useState();
  const getUserEmail = (e) => {
    setUserEmail(e.target.value);
    validationState.isEmailValid = validateUserInput(
      e.target,
      /^[a-zA-Z ]{3,}$/
    );
  };

  // Validate Function
  const validateUserInput = (e, reg) => {
    const regex = reg;
    let classList = "";
    let arr1 = e.className.split(" ");
    if (regex.test(e.value)) {
      if (arr1.includes("is-invalid")) {
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] === "is-invalid") {
            arr1[i] = "is-valid";
          }
        }
      } else {
        if (!arr1.includes("is-valid")) {
          arr1.push("is-valid");
        }
      }
      classList = arr1.join(" ");
      e.className = classList;
      return true;
    } else {
      if (arr1.includes("is-valid")) {
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] === "is-valid") {
            arr1[i] = "is-invalid";
          }
        }
      } else {
        if (!arr1.includes("is-invalid")) {
          arr1.push("is-invalid");
        }
      }
      classList = arr1.join(" ");
      e.className = classList;
      return false;
    }
  };

  //collect user data after enter Submit
  let newUser = { name: userName, password: userPassword, email: userEmail };
  const addNewUser = (e) => {
    e.preventDefault();
    if (
      validationState.isEmailValid === true &&
      validationState.isNameValid === true &&
      validationState.isPasswordValid === true
    ) {
      props.onAddNewUser(newUser);
    } else {
      alert("data Not Valid");
    }
  };

  return (
    <Form className="container border w-50 my-5 p-5 rounded">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Col sm={12}>
          <Form.Control type="text" placeholder="name" onChange={getUserName} />
          {validationState.isNameValid || (
            <div className="alert alert-danger py-2 mt-2">
              User Name contains Capital or Small letters or empty space only,
              at least 3 digits.
            </div>
          )}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Col sm={12}>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={getUserPassword}
          />
          {validationState.isPasswordValid || (
            <div className="alert alert-danger py-2 mt-2">
              Password can contains Capital or Small letters or numbers, at
              least 5 digits.
            </div>
          )}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Col sm={12}>
          <Form.Control
            type="Email"
            placeholder="Email"
            onChange={getUserEmail}
          />
          {validationState.isEmailValid || (
            <div className="alert alert-danger py-2 mt-2">
              Email should be in the form like this aaaaa@aaa.com.
            </div>
          )}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 12, offset: 0 }}>
          <Button type="submit" onClick={addNewUser}>
            Sign in
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default MyForm;
