import Header from "./components/Header"
import CarouselGame from "./components/Carouselnewgame"
import CarouselApp from "./components/Carouselnewapp"
import CompApps from "./components/CompApps"
import CompGames from "./components/CompGames"
import Nav from "./components/Nav"
import './globals.css'
import Head from "next/head"



export default function Home() {
  return (
    <main>
      <title>My Next App</title>

        <title>dfs</title>
      <div className="row bg-dark ms-0 me-0">
      {Header}
        <div className="col-12 apps">
          <Nav />
          <div className="container">
          <CarouselGame />
          <CarouselApp />
          <CompApps />
          <CompGames />
          </div>
        </div>
      </div>
    </main>
  )
}
