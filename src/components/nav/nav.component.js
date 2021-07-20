
import './nav.css'

const Nav = () => {
    return (
      <nav>
        <div className="leftLinks">
          <span className="logo">Indeed</span>
          <ul className="navLinks">
            <li>Find jobs</li>
            <li>Company Reviews</li>
            <li>Find salaries</li>
          </ul>
        </div>
        <div className="rightLinks">
          <span class="material-icons">chat</span>
          <span class="material-icons">notifications</span>
          <span class="material-icons">person</span>
          <div className="seperator"></div>
          <span>Employers / Job Posts</span>
        </div>
      </nav>
    );
}

export default Nav;