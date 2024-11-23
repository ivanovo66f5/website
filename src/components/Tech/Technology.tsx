import type { TechProps } from "../../types/props";

export default function Tech(props:TechProps) {
    return (
        <li className="tech">
            <img src={`./img/langs/${props.src}.png`} alt="" />
        </li>
    );
}