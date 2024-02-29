import { useState } from "react"
import "./Home.scss"
import RowDiv from "../../Components/RowDiv/RowDiv"

export default function Home({stateWords}) {
    return <div>
        { stateWords.words.map((item) => {
        return <RowDiv id={item.id} item={item} key={item.id}/>;
    })}
    </div>
}