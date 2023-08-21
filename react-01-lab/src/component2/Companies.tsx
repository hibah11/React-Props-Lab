
interface compinfo {
    coname: string;
    employeesNum: number;
    puYears: number;
    }
    
    function Companies (props:compinfo) {
        return(
            <>
             <h1>{props.coname}</h1>
             <p>{props.employeesNum}</p>
             <p>{props.puYears}</p>
            </>
           
        )
    }
    
    export default Companies;