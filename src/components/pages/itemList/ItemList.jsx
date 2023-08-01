import "./ItemList.css";
import ProductCard from "../../common/Card/ProductCard";
import { Skeleton, Stack } from "@mui/material";

const ItemList = ({ items }) => {
    let arr = [1, 2, 3, 4, 5, 6];
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
            <section className="container">
                {items.length > 0
                    ? items.map((item) => (
                          <ProductCard key={item.id} item={item} />
                      ))
                    : arr.map((elemento) => (
                          <Stack spacing={1} key={elemento}>
                              <Skeleton
                                  variant="rounded"
                                  width={250}
                                  height={250}
                                  animation="wave"
                              />
                              <Skeleton
                                  variant="text"
                                  sx={{ fontSize: "1.5rem", width: "60%" }}
                              />
                              <Skeleton
                                  variant="text"
                                  sx={{ fontSize: "2rem", width: "40%" }}
                              />
                              <div
                                  style={{
                                      display: "flex",
                                      justifyContent: "center",
                                  }}
                              >
                                  <Skeleton
                                      variant="text"
                                      sx={{
                                          fontSize: "1.5rem",
                                          width: "30%",
                                      }}
                                  />
                              </div>
                          </Stack>
                      ))}
            </section>
        </div>
    );
};

export default ItemList;
