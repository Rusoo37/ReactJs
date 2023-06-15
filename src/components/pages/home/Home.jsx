import "./Home.css";

const Home = ({ nombre, contador, setContador }) => {
    return (
        <div style={{ padding: "0" }}>
            <div>Saludos {nombre}</div>
            <h2>{contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
        </div>
    );
};

export default Home;
