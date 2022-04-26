import './Start.css';
import { useContext } from 'react';
import Layout from '../layout/Layout';
import { AppContext } from '../layout/Layout';


const Start = () => {

    const { start, setStart } = useContext(AppContext);


    return (
        <div className="home">
            {start
                ?
                <Layout />
                :
                <>
                    <div className="start__button">
                        <div className="start__button_yes">
                            <button className='start__button_yes_button' onClick={() => window.location.reload(true)}>Restart</button>
                        </div>
                    </div>
                </>

            }
        </div>
    )
}

export default Start;