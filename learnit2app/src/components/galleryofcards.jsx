import React, { useState } from "react";
import CardSlider from "./cardslider";
import './mainpage.scss';

const Gallery = ({ data }) => {
    const [position, setPosition] = useState(0)

    const prevCardHandler = () => {
        if (position > 0) {
            setPosition(position - 1)
        }
    };

    const nextCardHandler = () => {
        if (position >= data.length) {
            position = 0
        } else {
            setPosition(position + 1)
        }
    };
    return (
        <CardSlider
            prevCard={prevCardHandler}
            nextCard={nextCardHandler}
            number={position + 1}
            data={data}
            dataLength={data.length}
        />
    )
}

export default Gallery;