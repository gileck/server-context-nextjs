import { AsyncLocalStorage } from "node:async_hooks";
// import { serverGetterInClientComponentError } from "./server-getter-in-client-component-error";
import React from "react";

const Enter = ({ storage, value }) => {
    storage.enterWith({ value });
    return <></>;
};

function createServerContext(defaultValue){
    // serverGetterInClientComponentError("createServerContext");

    const storage = new AsyncLocalStorage();

    return {
        useContext: () => {
            const store = storage.getStore();
            return Object.assign({}, defaultValue || {}, store ? store.value : {});
        },
        // The provider must always be asynchronous
        Provider: async ({ children, value }) => {
            return (
                <>
                    <Enter storage={storage} value={value} />
                    {children}
                </>
            );
        },
        Consumer: ({ children }) => {
            const store = storage.getStore();
            return children(store ? store.value : defaultValue);
        },
        _storage: storage,
        _defaultValue: defaultValue,
    };
}

export default createServerContext;