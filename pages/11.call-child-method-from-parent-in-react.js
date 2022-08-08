import { forwardRef, useRef, useImperativeHandle } from "react"

// eslint-disable-next-line react/display-name
const Child = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        getMessage() {
            alert("Message from Child");
        }
    }));

    return <h1>Child Component</h1>;
});


export default function TestName() {

    const childRef = useRef();
    
    return (
        <>

            <Child ref={childRef} />
            <button onClick={() => childRef.current.getMessage()}>Click</button>
        </>
    )
}
