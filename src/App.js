import React from 'react'
import FirstPage from "./components/FirstPage"
import Header from "./components/Header"
import Main from "./components/Main"
import LastPage from "./components/LastPage"
import Letter from "./components/Letter"
import Message from "./components/Message"
import FirstSlider from "./components/FirstSlider"
import SecondSlider from "./components/SecondSlider"

function App() {
  return (
    <div>
      <FirstPage />
      <Header />
      <Main />
      <FirstSlider />
      <Letter  />
      <SecondSlider />
      <Message />
      <LastPage />
    </div>
  );
}

export default App;
