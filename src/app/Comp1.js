import {AppContext, useContext} from "./AppContext.js";

function MyServerComp() {
    const {url} = useContext()
    return <div>{url}</div>

}

function SomeOtherComp() {
    const {someOtherValue} = useContext()
    return <div>{someOtherValue}</div>

}

export default function Comp1() {
  return (
    <div>
        <MyServerComp />
        <SomeOtherComp />
    </div>
  );
}


const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export async function AsyncComp() {
    await wait(500)
    const {value} = useContext()
    return <div>
        <div>AsyncComp: {value}</div>
        <AppContext.Provider value={{value: 'override async value 1'}}>
            <Comp2 waitFor={1000} />
        </AppContext.Provider>
        <AppContext.Provider value={{value: 'override async value 2'}}>
            <Comp2 waitFor={500}/>
        </AppContext.Provider>
    </div>
}

async function Comp2(ms) {
    await wait(ms)
    const {value} = useContext()

    return <div>Comp2: {value}</div>
}