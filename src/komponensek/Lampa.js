export default function Lampa(props){
    
    function kattintas(){
        console.log("lampa(gyerek): ", props.index)
        props.kattintas(props.index)
    }

    return(
      
        <div className = {`lampa ${props.mezo === false ? "fel" : "le"  }` } onClick={()=>kattintas()}>
        {props.mezo}    

        </div>
        
    )
}