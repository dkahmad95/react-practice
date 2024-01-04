import { Link } from "react-router-dom"
import "./header.css"
import { useDispatch } from "react-redux"
import { getProducts } from "../../redux/apiCalls"

const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className="headerContainer">
        <div className="headerLeft"> 
        <Link className="link" to='/'>
            <div className="headerLogo">Logo</div>
        </Link>
        </div>
        <div className="headerRight">
            <div className="headerLinks">
              <Link className="link" to='/products'>
                <div className="links" onClick={()=> dispatch(getProducts)}>Products</div>
              </Link>
                <div className="links">About</div>
                <div className="links">Contact</div>
            </div>
        </div>

    </div>
  )
}

export default Header