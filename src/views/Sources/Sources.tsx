import Source from "../../components/Source/Source";
import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import type { SourceProps } from "../../types/props";
import "./Sources.scss";

export default function Sources() {
    const [sources, setSources] = useState<Array<SourceProps>>([]);

    useEffect(() => {
        try {
            const req = async () => {
                const r = await axios.get('./sources.json');
                setSources(r.data.sources);
            }

            req();
        } catch(e) {
            console.log(e);
        }
    }, []);
    
    return (
        <div className="container">
            <ul className="sources">
                {
                    sources.length > 0 ? sources.map((element) => {
                        return <Source key={nanoid()} title={element.title} text={element.text} img={element.img} links={element.links} />
                    }) : <p>Сейчас уроков нет</p>
                }
            </ul>
        </div>
    );
}