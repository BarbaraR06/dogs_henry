import './navbar.styles.css';


function Navbar () {
    return (
        <div>
            <form className="search-box">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Navbar;