import './App.scss';
import svgLogo from './UI/Logo.svg'
import CardList from "./Components/CardList";

function App() {
    return (
        <div className="App">
            <div className={"logo"}>
                <img src={svgLogo} alt="Logo" width={300} height={100}/>
            </div>
            <CardList/>
        </div>
    );
}

export default App;
