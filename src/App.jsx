import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import Header from './Header';
import Colors from './components/ColorBg';

function App() {
 

  return (
    <>
    <Header/>
    <Colors />
    <Card Tahir="Props Should be here!" btnText="Purchase Now" /> 

   </>
  )
}

export default App
