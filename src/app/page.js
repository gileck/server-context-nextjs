import Comp1 from "@/app/Comp1";
import { AppContext } from "./AppContext.js";
import { headers } from 'next/headers'

export default async function Home() {
    const headersList = await headers()
    const referer = headersList.get('referer')
  return (
    <div>
        <AppContext.Provider value={{url: referer}}>
            <Comp1 />
        </AppContext.Provider>
        <AppContext.Provider value={{url: 'xxxx'}}>
            <Comp1 />
        </AppContext.Provider>
        <AppContext.Provider value={{url: 'put here what even you want and it will work', someOtherValue: 'someOtherValue'}}>
            <Comp1 />
        </AppContext.Provider>
    </div>
  );
}
