import { productos } from '../productos';

// Función getProducts completa
export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = categoryId
                ? productos.filter((p) => p.Categoria.toLowerCase() === categoryId.toLowerCase())
                : productos;
            resolve(filteredProducts);
        }, 1000);
    });
};

// Función getProductById completa
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find((p) => p.id === Number(id)));
        }, 1000);
    });
};