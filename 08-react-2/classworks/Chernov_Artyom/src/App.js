import React, {useReducer} from 'react'
import Pages from 'pages';
import {ContextApp, initState, redditReducer} from './reducers/redditReducer';
import {BrowserRouter} from "react-router-dom";
import Header from './components/header/Header';

function App() {
    const [state, dispatch] = useReducer(redditReducer, initState)

    return (
        <BrowserRouter>
            <ContextApp.Provider value={{dispatch, state}}>
                <main>
                    <section>
                        <Header/>
                        <Pages/>
                    </section>
                </main>
            </ContextApp.Provider>
        </BrowserRouter>
    );
}

export default App;
