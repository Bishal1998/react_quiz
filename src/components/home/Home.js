import './Home.css';
import { useState } from 'react';
import Layout from '../layout/Layout';

const Home = () => {

    const [selectYes, setSelectYes] = useState(false);

    return (
        <div className="home">
            {selectYes
                ?
                <Layout />
                :
                <>
                    <div className="home__ready">
                        Ready to start ?
                    </div>
                    <div className="home__button">
                        <div className="home__button_yes">
                            <button className='home__button_yes_button' onClick={() => setSelectYes(true)}>Yes</button>
                        </div>
                    </div>
                </>

            }
        </div>
    )
}

export default Home;