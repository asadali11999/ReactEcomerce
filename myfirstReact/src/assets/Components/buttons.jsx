function  Button({label, bgcolor, textcolor}){
    return(
        <button className={`border ${bgcolor ? bgcolor :"bg-white"} 
        ${textcolor ? textcolor:"text-sky-400"}
         m-2 p-2 rounded-lg  `}>
            
            {label}
        </button>
    )
}
export default Button;