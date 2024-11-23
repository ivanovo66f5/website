import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import "./Header.scss";

export default function Header() {
    const [isHeaderWhite, setIsHeaderWhite] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const { pathname } = useLocation();

    const toggleMenu = () => {
        (document.querySelector('html') as HTMLElement).style.overflow = isMenuActive ? 'auto' : 'hidden';
        setIsMenuActive((pr) => !pr);
    }

    useEffect(() => {
        setIsMenuActive(false);
        setIsHeaderWhite(pathname !== '/');
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsHeaderActive(window.scrollY > 0);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${isHeaderWhite ? '' : 'not-white'} ${isHeaderActive ? 'active' : ''}`}>
            <div className="container">
                <div className="header-body">
                    <div className="logo">
                        <Link to="/">
                            <svg width="35px" height="35px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z" /><path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z" /><path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z" /></svg>
                            <h3>F5Club</h3>
                        </Link>
                    </div>
                    <div className={`hamburger ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                    </div>
                    <nav className={`${isMenuActive ? 'active' : ''}`}>
                        <ul className="header-list">
                            <HeaderLink href="/" text="Главная" />
                            <HeaderLink href="/sources" text="Материалы" />
                            <HeaderLink href="/working" text="Работа" />
                        </ul>
                        <ul className="header-btns">
                            <li>
                                <a href="https://github.com/ivanovo66f5">GitHub</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}