import type { SourceProps } from "../../types/props";
import "./Source.scss";

export default function Source(props:SourceProps) {
    return (
        <li className="source-item">
            <div className="source-top">
                <img src={'./sources/'+props.img} alt="" />
                <div className="source-text">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
            <div className="source-btns">
                {
                    props.links.length > 0 ? props.links.map((link, index) => {
                        return <a href={link.href} key={index+'ab'}>{link.title}</a>
                    }) : ''
                }
            </div>
        </li>
    );
}