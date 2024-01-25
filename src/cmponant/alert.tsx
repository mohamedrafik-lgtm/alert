import "./index.scss"
import { XCircle } from 'lucide-react';
import { ReactNode } from "react";
interface IProp{
    calssHeader:string
    iconHeader:ReactNode,
    textHeader:string,
    textContent:string
}

const alert = ({calssHeader,iconHeader,textHeader,textContent}:IProp)=>{
    return(
        <>
        <div className={calssHeader}>
            <div className="alert-header">
        <div className="title">
        {iconHeader}
        <h2>{textHeader}</h2>
        </div>
            <XCircle size={35} />
        </div>
        {textContent}
        </div>
        </>
    )
}
export default alert