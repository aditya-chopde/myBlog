import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext(null);

const BlogContextProvider = (props) =>{

    const url = "http://localhost:3000";

    const contextValue = {
        url,
    }

    return (
        <BlogContext.Provider value={contextValue}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;