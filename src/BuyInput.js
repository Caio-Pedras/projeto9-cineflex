export default function BuyInput ({inputName, placeholder, inputClass}){
    return (
        <div className={`buyInput ${inputClass}`}>
                <p>{inputName}:</p>
                <input type="text" placeholder={`${placeholder}...`} />
            </div>
    )
}