import './App.css';
import * as data from "./data/data.json"
import photo from "./data/sample_img.jpg"

function App() {
    return (
        <div className="App">
            <header>666 - marketplace</header>
            <div className="mainContent">
                {
                    data.default.map((ad) =>
                            <div className="card" key={ad.id}>
                                <h3 className="title">{ad.title}</h3>
                                <img src={photo} className="image" alt="ad-img"/>
                                <div className="price">{ad.price} $</div>
                                <div className="description">{ad.description}</div>
                            </div>
                    )
                }</div>
        </div>
    );
}

export default App;
