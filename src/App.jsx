import { useState, useEffect } from 'react';
import Header from "./header/header.jsx";
import './App.scss';

function App() {
    const [type, setType] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (type) {
            fetchData(type);
        }
    }, [type]);

    const fetchData = async (type) => {
        const baseURL = 'https://rickandmortyapi.com/api/';
        const url = `${baseURL}${type}`;

        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(`Los datos obtenidos para ${type} son: `, result);
            setData(result.results);
        } catch (error) {
            console.log('Error obteniendo datos.', error);
        }
    };

    return (
        <>
            <Header/>
            <div className="searchType">
                <button onClick={() => setType('character')}>
                    Personajes
                </button>
                <button onClick={() => setType('location')}>
                    Lugares
                </button>
                <button onClick={() => setType('episode')}>
                    Episodios
                </button>

            </div>
            <div className="section">
                <h2>
                    {type === 'character' && 'Personajes'}
                    {type === 'location' && 'Lugares'}
                    {type === 'episode' && 'Episodios'}
                </h2>
                {data ? (
                    <div className="searchResults">
                        {type === 'character' && data.map((item, index) => (
                            <div key={index} className="characterItem">
                                <img src={item.image} alt={item.name}/>
                                <div className="details">
                                    <h3>{item.name}</h3>
                                    <p>{item.status}</p>
                                </div>

                            </div>
                        ))}
                        {type === 'location' && data.map((item, index) => (
                            <div key={index} className="cardItem">
                                <div className="details">
                                    <h3>{item.name}</h3>
                                    <p>{item.type}</p>
                                    <p>{item.dimension}</p>
                                </div>
                            </div>
                        ))}
                        {type === 'episode' && data.map((item, index) => (
                            <div key={index} className="cardItem">
                                <div className="details">
                                    <h3>{item.name}</h3>
                                    <p>{item.episode}</p>
                                    <p>{item.air_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Selecciona una categoría para consultar los datos.</p>
                )}
            </div>
        </>
    );
}

export default App;
