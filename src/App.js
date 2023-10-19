import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './componets/MainLayout'
import MainPage from './componets/Home/MainPage'
import Catalog from './componets/Products/Сatalog'
import Sales from './componets/Promotions/Sales'
import About from './componets/Contacts/About'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="products" element={<Catalog />} />
            <Route path="sales" element={<Sales />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
