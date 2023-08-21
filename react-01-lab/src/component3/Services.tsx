interface service {
    serviveType: string;
    expectedPrices: number;
    }
    
    function Services(props:service) {
        return(
            <>
            <p>{props.serviveType}</p>
            <p>{props.expectedPrices}</p>
            </>
           
        )
    }
    
    export default Services;