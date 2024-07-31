import Homepage from "./pages/Homepage/Homepage"
import Input from "./components/Input/Input"

function App() {
  return (
    <div className="App">
      <Input id="search-input" name="search-input" placeholder="Colorado"/>
      <Homepage/>
    </div>
  )
}

export default App
