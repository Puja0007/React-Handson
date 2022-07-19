import { useSearchParams } from 'react-router-dom';

const SearchParamHook = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    return(<>
        <h1>SearchParamHook</h1>
        <h1>Age is: {searchParams.get('age')}</h1>
        <h1>Set search params from searchparam hook</h1>
        <input type="text" onChange={(e)=>setSearchParams({text: e.target.value})}/>

    </>)
}

export default SearchParamHook;