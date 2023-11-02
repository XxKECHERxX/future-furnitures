import { Route, Routes } from 'react-router-dom'
import MainLayout from './componets/MainLayout'
import HomePage from './componets/Home/HomePage'
import Catalog from './componets/Products/Сatalog'
import ListFullCatalog from './componets/Products/lists/listFullCatalog'
import ListTables from './componets/Products/lists/listTables'
import ListBeds from './componets/Products/lists/listBeds'
import ListChairs from './componets/Products/lists/listChairs'
import ListClosets from './componets/Products/lists/listClosets'
import ListLamps from './componets/Products/lists/listLamps'
import Item from './componets/Products/Item'
import Cart from './componets/Cart/Cart'
import Sales from './componets/Promotions/Sales'
import About from './componets/Contacts/About'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products/*" element={<Catalog />}>
            <Route index element={<ListFullCatalog />} />
            <Route path="all" element={<ListFullCatalog />} />
            <Route path="tables" element={<ListTables />} />
            <Route path="beds" element={<ListBeds />} />
            <Route path="chairs" element={<ListChairs />} />
            <Route path="closets" element={<ListClosets />} />
            <Route path="lamps" element={<ListLamps />} />
          </Route>
          <Route path="products/:id" element={<Item />} />
          <Route path="products/:category/:id" element={<Item />} />
          <Route path="cart" element={<Cart />} />
          <Route path="sales" element={<Sales />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
