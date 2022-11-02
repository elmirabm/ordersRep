
import './App.css';

import Ordertable  from './componenets/ordertable';
import Search from './componenets/search';

//import docheckdb from './features/indexdb';
import {Socketclientlistener} from './features/socketclinet'; 


import io from 'socket.io-client';



const socket = io.connect("http://localhost:3001");





function App() {
 
  Socketclientlistener();
  //const dispatch = useAppDIspatch();



  return (
    <div className="App">
      <Search/>
      <Ordertable/>
    </div>
  );
}

export default App;
