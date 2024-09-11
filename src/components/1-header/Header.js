import './header.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useLanguage } from '../LanguageContext';
function Header() {


  const { changeLanguage } = useLanguage();
  const favoritesCount = useSelector((state) => state.favorites.items.length);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return(
  <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <Link class="navbar-brand"to="/">Movies</Link>

    




    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
 

       
   
      <li class="nav-item" >
        <Link class="nav-link" to="/favorites">Favorites ({favoritesCount})</Link>
        </li>
           

        <li class="nav-item">
          <Link class="nav-link" to="/register">Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>

        <li className="nav-item">
              <select onChange={handleLanguageChange} className="form-select">
                <option value="en-US">English</option>
                <option value="es-ES">Spanish</option>
                <option value="fr-FR">French</option>
             
              </select>
            </li>

      </ul>

    </div>
  </div>
</nav>
  
)}
export default Header;
