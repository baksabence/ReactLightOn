import Lampa from "./Lampa"

export default function Jatekter(props){

    function kattintas(adat){
        console.log("jatekter(szülő): ", adat)
        props.kattintas(adat)
    }

    return(
    <>
        {
        props.lista.map((elem, index)=>{
            return (<Lampa mezo = {elem} key = {index} index = {index} kattintas = {kattintas} />)
        })
    }
    </>
    )
}