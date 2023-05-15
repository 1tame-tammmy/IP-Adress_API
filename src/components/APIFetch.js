import {useEffect,useState } from "react";
import "../App.css";
import Map from './Map';
import SyncLoader from "react-spinners/ClockLoader";
import DateTime from "./TimeDate";
import Flag from "./Flage";
// import Logo from "../logo.svg";


export default function API_Fetch() {

    const [loading, setLoading] = useState(true);
    const [api, setApi] = useState({});
    // console.log("api",api)


    useEffect(() => {
const DataFetch = async () => {

    try {
        const response = await fetch('https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_UNtzK431AnwJga4kFtkqB7ya6XH2R');
        if (!response.ok) {
            throw new Error(`Request failed, status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false)
        setApi(data);
        // console.log("data",data)
    } catch (error) {
		console.log(error);
		}
	};
    DataFetch()
}, []);


    return (
    <section className="App_body">
        <div className="App_space">
            <h3>IP Adress</h3>
            <div className="body_elements">
            {loading ? (
				<SyncLoader
					color="blue"
					cssOverride={{ margin: "40vh auto" }}
					loading
					size={90}
				/>
			) : (
                <>
                <div className="map_container">
                    < Map
                    lati ={api && api.location && api.location.lat && (api.location.lat)}
                    lngi ={api && api.location && api.location.lng && (api.location.lng)} />
                </div>
                <div className="ip_adress">
                    <p>ip adress : {api.ip}</p>
                </div>
                <div className="location_container">
                    {/* {api && api.location && api.location.country && (           example for a logic to avoid crashing without waiting for the loading of the api to complete */}
                    {/* <p>Country: {api.location.country}</p>*/}
                    <Flag country={api.location.country} apii={api}/>
                    <p>Country: {api.location.country}</p>
                    <p>region: {api.location.region}</p>
                    <p>city: {api.location.city}</p>
                    {api.location.postalCode && <p>postalCode:{api.location.postalCode}</p> }
                    <p>timezone: {api.location.timezone}</p>
                    {/* <p>using VPN: {api.proxy.vpn === false ? "No" : "Yes"}</p> */}
                    <DateTime/>
                </div>
                </>)}
            </div>
        </div>
    </section>
    )
}