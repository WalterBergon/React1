// src/utils/firebaseService.js
import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

// Función para obtener los productos
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

// Función para obtener un producto por id
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
