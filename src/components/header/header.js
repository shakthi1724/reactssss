import { Outlet } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo-area">
                            <div className="logo">GET THE APP</div>
                        </div>
                        <nav className="nav-area">
                            <a className="nav-item" href="#">Investor Relations</a>
                            <a className="nav-item" href="#">Add Restaurant</a>
                            <a className="nav-item" href="#">Log in</a>
                            <a className="nav-item" href="#">Sign up</a>
                        </nav>
                    </div>
                </div>
            </header>
            <Outlet></Outlet>
        </div>
    );
}

export default Header;