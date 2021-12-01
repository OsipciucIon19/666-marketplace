import './App.css';
import * as data from "./data/data.json"
import photo from "./data/sample_img.jpg"

function App() {
    return (
        <div className="App">
            666 - marketplace
            <h1>feature</h1>
            <div className="mainContent">
                {
                    data.default.map((ad) =>
                        <div key={ad.id}>
                            <h1>{ad.title}</h1>
                            <img src={photo} alt="ad-img" style={{"width": 100}}/>
                            <div>{ad.price} $</div>
                            <div>{ad.description}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default App;
