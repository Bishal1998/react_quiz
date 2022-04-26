import { AppContext } from "../../components/layout/Layout";
import { useContext } from "react";


const Score = () => {

    const { score } = useContext(AppContext);

    return (
        <div>{score}</div>
    )
}

export default Score;