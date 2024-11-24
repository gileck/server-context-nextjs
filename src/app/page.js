import Comp1 from "@/app/Comp1";
import { AppContext } from "./AppContext.js";
import { headers } from 'next/headers'
import { AsyncComp } from "@/app/Comp1";

export default async function Home({searchParams}) {
    // console.log({searchParams})
    const query = await searchParams
    console.log({query})
    // const headersList = await headers()
    // const referer = headersList.get('host')
    // console.log({referer})
  return (
    <div>
        <AppContext.Provider value={{query}}>
            <Comp1 />
        </AppContext.Provider>
        <AppContext.Provider value={{query}}>
            <Comp1 />
        </AppContext.Provider>
        <AppContext.Provider value={{query, someOtherValue: 'someOtherValue'}}>
            <Comp1 />
        </AppContext.Provider>
        <AppContext.Provider value={{value: 'async value', query}}>
            <AsyncComp />
        </AppContext.Provider>

    </div>
  );
}
