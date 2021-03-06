import './Layout.css';
import Topbar from './top/Topbar';
import Question from '../question/Question';
import { createContext, useState } from 'react';

export const AppContext = createContext();

const Layout = () => {

    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);
    const [start, setStart] = useState(false);

    return (
        <div className="layout">
            <AppContext.Provider value={{ score, timer, setScore, setTimer, start, setStart }}>
                <Topbar />
                <div className="layout_divider"></div>
                <Question />
            </AppContext.Provider>

        </div>
    )
}

export default Layout;