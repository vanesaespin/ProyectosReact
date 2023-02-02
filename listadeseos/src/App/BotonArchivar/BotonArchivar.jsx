import React from "react"
import PropTypes from "prop-types"


//VERSIÓN SIN HOOKS
const BotonArchivar = ({onArchivadoClick}) => {
    
    return (
        <button type="button" className='deseos-clear' onClick={onArchivadoClick}>
            Archivar deseos cumplidos. 
        </button>
    );
}
 

//VERSIÓN CON HOOKS para contar clics
// const BotonArchivar = () => 
// {
//     //hook para practicar estados
//         const [count, setCount] = useState(0);
//         return (
//             <button type="button" className='deseos-clear' onClick={() => setCount(count + 1)}>
//                 Archivar deseos cumplidos. Clicks {count}
//             </button>
//         );
// }

BotonArchivar.propTypes = {
    onArchivadoClick: PropTypes.func,
}
BotonArchivar.defaultProp = {
    onArchivadoClick: ()=>{},
}

export default BotonArchivar;