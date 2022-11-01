import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import CarouselView from "./components/CarouselView";

// Root app component
function App() {
  const name = "Zeeshan";
  const condition = true;
  return (
    <div className="App" style={{ margin: "10px" }}>
      <Header navTitle="Task Tracker App" />
      <h1 className="title">Landing Page</h1>
      <h2 className="title">Task Tracker by '{condition ? name : "NONE"}'</h2>
      {/* <CarouselView/> */}
      <Tasks />
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
