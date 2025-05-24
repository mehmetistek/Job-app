import { NavLink } from "react-router-dom"

const Header = () => {
  return (
  <header>
    <h2>İşTakip</h2>
    <nav>
      <NavLink to={"/"}>İş Listesi</NavLink>
      <NavLink to={"/new"}>İş Ekle</NavLink>
    </nav>
  </header>
  )
}

export default Header
