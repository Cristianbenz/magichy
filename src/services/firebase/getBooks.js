import { getFirestore, getDocs, getDoc, doc, collection, query, where } from "firebase/firestore";

const DB = getFirestore();

export function getBooks( categoryName ) {
    const BOOKS = collection(DB, "items");
    const LIST = categoryName ? query(BOOKS, where("genre", "==", categoryName)) : BOOKS
    return getDocs(LIST)
}

export function getDetail( id ) {
    const BOOK_REF = doc(DB, "items", id);
    return getDoc(BOOK_REF)
}