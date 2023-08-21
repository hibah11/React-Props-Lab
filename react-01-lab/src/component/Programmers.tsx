
interface employee {
name: string;
prolang: string;
exyears: number;
company: string;
}

function Programmers(props:employee) {
    return(
        <>
         <h1>{props.name}</h1>
        <p>{props.prolang}</p>
        <p>{props.exyears}</p>
        <p>{props.company}</p>
        </>
       
    )
}

export default Programmers;