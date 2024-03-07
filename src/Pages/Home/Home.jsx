import { useState, useContext } from "react"
import "./Home.scss"
import RowDiv from "../../Components/RowDiv/RowDiv"
import AddWord from "../../Components/AddWord/AddWord";
import { ContextWords } from "../../Context/ContextWords";


export default function Home() {
    //  Берем данные из context
    const {dataServer, setDataServer} = useContext(ContextWords);
    
    // Удаление элемента из API
    const deleteItem = async (id) => {
        try {
            await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
                method: "POST",
            }); 
            const updateList = dataServer.filter((item) => item.id !== id);
            setDataServer(updateList);
        } catch (error) {
            console.error(error);
             return false;
        }
    }

    // // функция сохранения измененных слов
    const saveChanges = async (id, editedEnglish, editedTranscription, editedRussian) => {
    const newData = {
            english: editedEnglish,
            trancription: editedTranscription,
            russian: editedRussian
        };
        try {
            await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newData),
            })
            .then((data) => {
                console.log("Данные изменены:", data);
            })
            const updateList = dataServer.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        english: editedEnglish,
                        trancription: editedTranscription,
                        russian: editedRussian,
                    };
                }
                return item;
            });
            setDataServer(updateList);
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <>
        <AddWord/>
        <div>
        { dataServer.map((item) => {
        return <RowDiv id={item.id} item={item} key={item.id} deleteItem={() => deleteItem(item.id)} saveChanges={saveChanges} />;
        })}
        </div>
        </>
    )
}