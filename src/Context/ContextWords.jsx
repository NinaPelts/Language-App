import GET from '../Services/GET';
import Loading from '../Components/Loading/Loading';
import { createContext, useState, useEffect } from 'react';

export const ContextWords = createContext();

export function ContextWordsComponent({children}) {
    const [dataServer, setDataServer] = useState(false);

    const value = { dataServer, setDataServer };

    useEffect(() => {
        getWordsServer();
    })

    async function getWordsServer() {
        const wordsServer = await GET.getWords();
        setDataServer(wordsServer);
    }

    if(!dataServer) {
        return (<Loading/>
        )
    }

    return (
        <ContextWords.Provider value={value}>
        {children}
        </ContextWords.Provider>
    )
}