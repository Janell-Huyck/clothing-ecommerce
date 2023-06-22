 import { createContext, useState, useEffect } from "react";
 import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
 
 export const CategoriesContext = createContext({
    categoriesMap: {},
 });

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value= { categoriesMap }
        
    // When using async function inside useEffect, we need to create
    // a new (async) function and call it inside useEffect.
    // This is because useEffect cannot be async.

    // Here we are loading the data from the database.
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    // This was done one time to write to the database.
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    return (
        <CategoriesContext.Provider value={ value }>
            {children}
        </CategoriesContext.Provider>
    );
}