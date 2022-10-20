import React from "react";
import Header from "./components/Header";
// Root app component
function App() {
  const name = 'Zeeshan';
  const condition = true;
  return (
    <div className="App">
      <Header title="Task Tracker App"></Header>
    <h1>Landing Page</h1>
    <h2>Task Tracker by '{condition? name : 'NONE'}'</h2>
    </div>
  );
}


// Class Based
// class App extends React.Component {
//   render() {
//       const name = 'Zeeshan';
//   const condition = true;
//     return <div className="App">
//     <Header/>
//     <h1>Landing Page</h1>
//     <h2>Task Tracker by '{condition? name : 'NONE'}'</h2>
//     </div>
//   }
// }
export default App;