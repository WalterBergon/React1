import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where, doc, getDoc, updateDoc } from "firebase/firestore";

//  para obtener los productos
export const getProducts = async (categoryId) => {
    try {
        // Aquí usamos "productos" para referirnos a la colección de Firestore
        const collectionRef = collection(db, "productos");
        let q;
        if (categoryId) {
            // Filtramos por el campo "Categoria"
            q = query(collectionRef, where("Categoria", "==", categoryId));
        } else {
            q = collectionRef;
        }
        const snapshot = await getDocs(q);
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return products;
    } catch (error) {
        console.error("Error al obtener productos desde Firestore:", error);
        return [];
    }
};

//  para obtener un producto por id
export const getProductById = async (id) => {
    try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el producto por id desde Firestore:", error);
        return null;
    }
};

// para actualizar el stock de un producto
export const updateProductStock = async (productId, quantity) => {
    try {
        const productRef = doc(db, "productos", productId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
            const currentStock = productSnap.data().stock;
            const newStock = currentStock - quantity;

            if (newStock < 0) {
                throw new Error("Stock insuficiente");
            }

            await updateDoc(productRef, { stock: newStock });
            console.log(`Actualizado ${productId}: stock de ${currentStock} a ${newStock}`);
            return { success: true, newStock };
        } else {
            throw new Error("Producto no encontrado");
        }
    } catch (error) {
        console.error("Error al actualizar el stock:", error);
        return { success: false, error: error.message };
    }
};

// función para validar stock
export const validateCartStock = async (cartItems) => {
    for (const item of cartItems) {
        const productRef = doc(db, "productos", item.id);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
            const { stock } = productSnap.data();
            if (stock < item.quantity) {
                // Retorna un objeto con éxito false y los detalles del producto que falla
                return {
                    success: false,
                    productId: item.id,
                    productName: item.nombre,
                    availableStock: stock,
                    requested: item.quantity,
                };
            }
        } else {
            return {
                success: false,
                error: `Producto con id ${item.id} no encontrado`,
            };
        }
    }
    return { success: true };
};
