import {AppContext, useContext} from "./AppContext.js";

async function MyServerComp() {
    await wait(2000)
    const {query} = useContext()
    return <div>foo={query.foo}</div>

}

function SomeOtherComp() {
    const {someOtherValue} = useContext()
    return <div>{someOtherValue}</div>

}

export default function Comp1() {
  return (
    <div>
        <MyServerComp />
        {/*<SomeOtherComp />*/}
    </div>
  );
}


const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export async function AsyncComp() {
    await wait(500)
    const {value, query} = useContext()
    return <div>
        <div>AsyncComp: {value}</div>
        <AppContext.Provider value={{query, value: 'override async value 1'}}>
            <Comp2 waitFor={1000} query={query}/>
        </AppContext.Provider>
        <AppContext.Provider value={{query, value: 'override async value 2'}}>
            <Comp2 waitFor={500} query={query}/>
        </AppContext.Provider>
    </div>
}

async function Comp2(ms) {
    await wait(ms)
    const {value, query} = useContext()

    return <div>
        Comp2: {value}
        <div>
            foo={query.foo}
        </div>
    </div>
}