import React from "react";
import "./styles.css";
import styled from "styled-components";
import NavBar from "./Component/NavBar";

const Wrapper = styled.div`
  padding: 2rem;
  border: 1px solid;
  border-color: red;

  h1 {
    color: blue;
  }
  h2 {
    color: red;

    @media all and (max-width: 620px) {
      color: green;
    }
  }
`;

const A = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: ${(props) => (props.color === "yellow" ? "yellow" : "aqua")};
`;

export default function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Wrapper>
        <A color="green" href="https://www.google.com">
          goto google
        </A>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Wrapper> */}
    </div>
  );
}
