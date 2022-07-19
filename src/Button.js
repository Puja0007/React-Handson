import React,{useState, forwardRef, useImperativeHandle} from 'react';

const Button =forwardRef((props, ref)=>{
    const [showText, setShowText] = useState(false);
     {/* using useImperative handle hook we can handle child component's dom using forWardRef */}
    useImperativeHandle(ref, () => ({
         handelShowText(){
            setShowText(!showText);
        },
    }));
    return(<>
    <button>Child Button</button>
    {showText && <span>Hello World</span>}
    </>)
});

export default Button;