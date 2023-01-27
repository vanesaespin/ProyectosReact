import React from "react";
import classnames from "classnames";

const ListaDeseos = ({deseos}) =>
<ul className='lista-deseos'>
        {deseos.map(({ texto, cumplido }, i) => (
            <li key={texto} className={classnames(
                'lista-deseos__item',
                 { 'lista-deseos__item--cumplido': cumplido}
            )}>
                <input id={`deseo${i}`} type="checkbox" checked={cumplido} />
                <label htmlFor={`deseo${i}`}>{texto}</label>
            </li>
            ))}
    </ul>

    export default ListaDeseos;