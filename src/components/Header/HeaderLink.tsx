import { Link } from "react-router-dom";
import type { HeaderLinkProps } from "../../types/props";

export default function HeaderLink(props:HeaderLinkProps) {
    return (
        <li>
            <Link to={props.href}>{props.text}</Link>
        </li>
    );
}