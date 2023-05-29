import { createContext } from 'react';
import './App.css';
import ComA from './components/ComA';

//creating a context known as FirstName
const FirstName = createContext();

//creating another context known LastName
const LastName = createContext();
function App() {
  return (
    console.log(FirstName),
    (
      <>
        <FirstName.Provider value={'ajay'}>
          <LastName.Provider value={'mishra'}>
            <ComA />
          </LastName.Provider>
        </FirstName.Provider>
      </>
    )
  );
}

export default App;

//to use context in another file we need to export the context
export { FirstName, LastName };
