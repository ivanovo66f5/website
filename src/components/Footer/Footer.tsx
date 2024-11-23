import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-body">
                    <div className="footer-columns">
                        <div className="footer-column">
                            <h3>Проект</h3>
                            <Link to="/">О проекте</Link>
                            <Link to="./sources">Материалы</Link>
                            <Link to="./working">Работа</Link>
                            <Link to="/">GitHub</Link>
                        </div>
                        <div className="footer-column">
                            <h3>Команда</h3>
                            <Link to="https://github.com/shizuketsu">Shizu</Link>
                            <Link to="https://github.com/ivanovo66f5">GitHub</Link>
                            <Link to="https://t.me/shizuketsu">Telegram</Link>
                        </div>
                    </div>
                    <div className="copyright">
                        <h3>Shizuketsu © 2024-2025</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}