import bgImage from '../assets/header.jpg';

export default function Header(){
    return (<>
        <section className="appHeader"
                 style={{
                     backgroundImage: `url(${bgImage})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center center',
                 }}
        >
            <h1 className="jnrp">JORGE ROBLES <br/>REACT TEST 2024</h1>
            <h2>Rick and Morty API</h2>
        </section>

    </>);
}