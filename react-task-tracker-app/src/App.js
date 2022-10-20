// Root app component
function App() {
  const name = 'Zeeshan';
  const condition = true;
  return (
    <div className="App">
    <h1>Landing Page</h1>
    <h2>Task Tracker by '{condition? name : 'NONE'}'</h2>
    </div>
  );
}

export default App;
