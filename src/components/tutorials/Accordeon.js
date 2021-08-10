import React, { useRef, useState } from 'react';
import { Plus, Subtitle, Video, VideoDisplay } from './TutorialsElements';

const Accordeon = ({ title, src }) => {

    const videoDisplay = useRef(null);

    const [collapsible, setCollapsible] = useState(false);
    const [height, setHeight] = useState("50px")
    const Toggle = () => {
        setCollapsible(!collapsible);
        setHeight(collapsible ? "50px" : `500px`);
    }

    return (
        <VideoDisplay  
            ref={videoDisplay}
            onClick={Toggle}
            style={{ height: `${height}`, transition: "height 0.5s ease-in-out" }}
        >
            <Subtitle
                style={{ background: `${collapsible ? "#222" : "#181818"}` }}
            >
                <p>{title}</p><Plus/>
            </Subtitle>
            <Video 
                src={src}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />
        </VideoDisplay>
    );
}

export default Accordeon;