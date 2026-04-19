import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Home from "./pages/Home"
import MonstersPage from "./pages/MonstersPage"
import { MonsterProvider } from "./context/MonsterContext"
import { InitiativeProvider } from "./context/InitiativeContext"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {




  return (
    <>

      <MonsterProvider>
        <InitiativeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/monsters" element={<MonstersPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </InitiativeProvider>
      </MonsterProvider>


    </>
  )
}

export default App
