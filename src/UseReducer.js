import React,{useReducer} from 'react';
import styled from 'styled-components';

const  StyledDiv = styled.div`
    background-color:red;;
    height:200;`;
const title = `This is Replacement of useState using useReducer`;
function reducer(state, action){

    switch(action.type){
        case 'INCREMENT':
            return {count: state.count+1, showText: state.showText};

        case 'toggleShowText':
            return {count: state.count, showText: !state.showText};
            
        default:
            return state;    
    }

}

function UseReducer(){
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(false);
    const [state, dispatch] = useReducer(reducer, {count:0, showText:false});

    function handelCountText(){
        // setShowText(!showText);  
        // setCount(count+1);
        // for handelling two different states we are using two useStates instead of using two states we can do this is single states using  useReducer

        dispatch({type:'toggleShowText'});
        dispatch({type:'INCREMENT'});
    }
    return(
        <>
        <StyledDiv>
        <h1>UseReducer</h1>
        <h2>{title}</h2>
        {state.showText && <p>title</p>}
        <label>Count is: {state.count}</label>
        <button onClick={handelCountText}>Increment</button>
        </StyledDiv>
        </>
    )
}

export default UseReducer;