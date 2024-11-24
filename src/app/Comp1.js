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


const wait = () => new Promise(resolve => setTimeout(resolve, 1000))

export async function AsyncComp() {
    await wait()
    const {value} = useContext()
    return <div>
        <div>AsyncComp: {value}</div>
        <AppContext.Provider value={{value: 'override async value 1'}}>
            <Comp2 />
        </AppContext.Provider>
        <AppContext.Provider value={{value: 'override async value 2'}}>
            <Comp2 />
        </AppContext.Provider>
    </div>
}

async function Comp2() {
    await wait()
    const {value} = useContext()

    return <div>Comp2: {value}</div>
}