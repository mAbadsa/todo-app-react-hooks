import { useState } from 'react';

function useInputState (initialValue = "") {
    const [state, setState] = useState(initialValue);
    function inputState(e) {
        setState(e.target.value);
    }

    function reset () {
        setState('');
    }
    return [state, inputState, reset];
}

export default useInputState;