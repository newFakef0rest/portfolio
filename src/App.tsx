import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import Coding from './images/coding.mp4';


function App() {

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <video className="video" src={Coding} autoPlay loop muted></video>
    </div>
  )
}

export default App
