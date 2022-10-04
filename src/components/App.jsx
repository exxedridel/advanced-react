import React from "react";
import "../styles/global.scss";
import ComponentDidUpdate from "./ComponentDidUpdate";
import ComponentWillUnmount from "./ComponentWillUnmount";
import DataFetcher from "./DataFetcher";
import Header from "./Header"
import Button from "./Button"
import ThemeContext from "../themeContext"

function App() {
  return (
    <div>
      {/* <DataFetcher url="https://swapi.dev/api/people/1">
        {({ data, loading }) => (
          loading ? 
          <h1>Loading...</h1> : 
          <p>{JSON.stringify(data)}</p>
        )}
      </DataFetcher> */}
      <div>
            <Header />
            <ThemeContext.Consumer>
                {theme => (
                    <Button theme={theme} /> // theme setted by value setted in inde.js
                )}
            </ThemeContext.Consumer>
            
            <Button theme="dark"/> {/*dark theme hard coded*/}
            <Button /> {/*if no theme provided will go default*/}
            <Button theme="monkey"/> {/*if value not listed on possibles propsType warning will be thrown, and set to default*/}

        </div>
    </div>
  );
}

export default App;
