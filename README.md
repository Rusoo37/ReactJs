# NicSan

El ecommerce trata de venta de botines de tres marcas, Addidas, Nike y Puma. Tendremos una seccion donde se mostraran todos los productos, y luego se filtran por marca. Tendremos una barra de busqueda para ver los productos que se buscan, al apretar te llevara al detalle del producto.
Al apretar en "ver mas", iremos al producto con todos sus detalles en el cual se permite agregar al carrito. Una vez agregados tenemos la opcion de comprar y que la compra finalice en un checkout, devolviendonos el codigo de compra.
En el Footer, hay un input en el cual la persona se suscribe para recibir ofertas, esa suscripcion se guarda en firestore.

## Tecnologias utilizadas

-   <svg width="40" height="30" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-sm mr-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
-   <img src="https://res.cloudinary.com/dqonbozpq/image/upload/v1691147249/lockup_fzalau.svg" style="width: 120px" alt="Firebase">
-   <svg width="40" height="30" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000"/></svg>

## Funcionalidad

Al inicio, se muestra el ItemList, al igual que el Navbar y el Footer (en todas las paginas se ven), puede navegar entre las distintas categorias. Si apreta un item, lo lleva a un pagina ItemDetail en el cual va a encontrar toda la informacion del producto. Si apreta el carrito, lo va a llevar a la pagina de los productos que hay en el carrito. Si en ItemDetail se apreta el boton agregar al carrito, seleccionando la cantidad que necesita y va al carrito, va a encontrar el detalle del producto. Si desea comprar, lo va a llevar a una pagina CheckOut en la cual puede finalizar la compra y volvera al menu principal.

## Mejoras para el futuro

Estas mejoras las queria realizar para la entrega final, pero debido a trabajar, no tuve el tiempo suficiente para sentarme a romperme la cabeza y hacer todo.

-   Login, se resistra y loguea correctamente, lo unico que le falta es que al estar iniciado, hacer la persistencia de los datos y que desaparezca el boton para loguearse.
-   Dashboard: Hasta el momento solo se puede ver los productos, ordenes y usuarios. Ademas, solo puede eliminar. (Mas adelante, lo hare funcionar al 100%).
    .
