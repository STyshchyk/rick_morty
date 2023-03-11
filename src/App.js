import './App.scss';
import svgLogo from './UI/Logo.svg'
import {useGetGoodsQuery} from "./store/cardApi";
import CardList from "./Components/CardList";

function App() {
    const {data, isLoading} = useGetGoodsQuery()
    return (
        <div className="App">
            <div className={"logo"}>
                <img src={svgLogo} alt="Logo" width={300} height={100}/>
            </div>
        </div>

    );
}

export default App;
