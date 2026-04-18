import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Home from "./pages/Home"
import MonstersPage from "./pages/MonstersPage"
import { MonsterProvider } from "./context/MonsterContext"


function App() {




  return (
    <>
      <MonsterProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/monsters" element={<MonstersPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MonsterProvider>


    </>
  )
}

export default App
