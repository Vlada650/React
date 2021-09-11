import React from "react";
import UnitCards from "./allcards";
import './mainpage.scss';

const ListCards = (props) => {
    const { array } = props
    return (
        <>
            {
                array.map((word) => (<UnitCards key={word.english} english={word.english} russian={word.russian} transcription={word.transcription} unit={word.unit} />))}
        </>
    )
}

export default ListCards;