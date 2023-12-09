
import Logo from '../assets/svg/logo.svg'

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt={"Logo."} className={"nav--logo"} />
      <h1 className={"nav--text"}>My Travel Journal.</h1>
    </nav>
  )
}

export default Navbar