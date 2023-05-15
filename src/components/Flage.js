import '../App.css';


export default function Flag({apii,country}) {

    return (
    <div className='flag-container'>
    {country ? (
        <img className='flag_img' src={`https://flagcdn.com/w640/${country.toLowerCase()}.png`}
        srcset={`https://flagcdn.com/w1280/${country.toLowerCase()}.png 2x,https://flagcdn.com/192x144/de.png 3x`}
        width="240"     // u can adjust the flag's size from here, the rest can be modifed from the App.css .flag_img
        alt="Flag" />
    ) : null}
        </div>
    ) 
}