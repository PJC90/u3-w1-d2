import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './Components/CustomNavbar'
import MyFooter from './Components/MyFooter'
import AdditionalContentExample from './Components/AdditionalContentExample'
import BasicCard from './Components/BasicCard'

function App() {
  return (
    <div>
      <CustomNavbar addText="Mondadori" />

      <AdditionalContentExample />
      <BasicCard />
      <MyFooter />
    </div>
  )
}

export default App
