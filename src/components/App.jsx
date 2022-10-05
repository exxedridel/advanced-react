import React from "react";
import "../styles/global.scss";
import ComponentDidUpdate from "./ComponentDidUpdate";
import ComponentWillUnmount from "./ComponentWillUnmount";
import DataFetcher from "./DataFetcher";
import Header from "./Header";
import Button from "./Button";
// import ThemeContext from "../themeContext";

function App() {
  return (
    <>
      {/* <DataFetcher url="https://swapi.dev/api/people/1">
        {({ data, loading }) => (
          loading ? 
          <h1>Loading...</h1> : 
          <p>{JSON.stringify(data)}</p>
        )}
      </DataFetcher> */}
      <div>
        <Header />
        <Button />
      </div>
    </>
  );
}

export default App;
