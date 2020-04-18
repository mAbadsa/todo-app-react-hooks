import {useState} from 'react';

function useToggle(initialValue = false) {
    const [state, setState] = useState(initialValue);
    function toggle() {
        setState(!state);
    }

    return [state, toggle];
}

export default useToggle;