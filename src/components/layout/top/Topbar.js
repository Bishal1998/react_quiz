import './Topbar.css';
import Score from '../../../const/score/Score';
import Timer from '../../../const/timer/Timer';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar__score">
                <Score />
            </div>
            <div className="topbar_title">
                React Quiz
            </div>
            <div className="topbar__timer">
                <Timer />
            </div>
        </div>
    )
}

export default Topbar;