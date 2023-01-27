import React, {useState} from "react"
{/* botón */ }

const BotonArchivar = () => {
    {/*hook para practicar estados*/}
        const [count, setCount] = useState(0);
        return (
            <button type="button" className='deseos-clear' onClick={() => setCount(count + 1)}>
                Archivar deseos cumplidos. Clicks {count}
            </button>
        );
}

export default BotonArchivar;