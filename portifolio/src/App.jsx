import { Header } from "./components/Header"
import { Skills } from "./components/Skills"
import { Footer } from "./components/Footer"
import { Contatc } from "./components/Contatc"
import { Experience } from "./components/Experience"
import { Project } from "./components/Projects"
import { Education } from "./components/Education"

function App() {

  return (
    <>
      <Header/>
      <Contatc/>
      <Education/>
      <Skills/>
      <Project/>
      <Experience/>
      <Footer/>
    </>
  )
}

export default App
