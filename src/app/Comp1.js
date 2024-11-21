import { useContext } from "./AppContext.js";

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
