import '../components/Button.css'

function ButtonLink({label, href = "#"}){
    return(
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
        >
            {label}
        </a>
    )

}

export default ButtonLink