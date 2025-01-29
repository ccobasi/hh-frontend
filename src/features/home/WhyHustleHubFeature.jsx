
import WhyHustleHub from "./WhyHustleHub";
import whyHustleHub from "./whyHustleHubData";


export const WhyBusinessesTurnToHustleHub = () => {
       {/* Data Mapping for Why Hustle Hub*/ }
    let firstContainer = <WhyHustleHub {...whyHustleHub}/>
    return(
       <div style={{marginTop:'15%'}}>
        { firstContainer}
       </div>

    );
       {/* Mapping End*/ }
}



