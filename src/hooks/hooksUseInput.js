import React, { useEffect }  from 'react';



export function useInput(initialState) {
    const [state, setState] = React.useState(initialState);

    const setInput = (event) => setState(event.target.value);
    return [state, setInput, setState] 
}