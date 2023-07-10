import "./ItemList.css";
import ProductCard from "../../common/Card/ProductCard";

const ItemList = ({ items }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                gap: "20px",
            }}
        >
            <h1 style={{ marginTop: "50px", marginBottom: "30px" }}>
                Productos
            </h1>
            <div className="container">
                {items.map((item) => {
                    return <ProductCard key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
};

export default ItemList;
