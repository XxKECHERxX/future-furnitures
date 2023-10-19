import { Outlet } from 'react-router-dom'
import Navig from './Navig'

const MainLayout = () => {
  return (
    <>
      <Navig />
      <Outlet />
      <Navig />
    </>
  )
}

export default MainLayout
