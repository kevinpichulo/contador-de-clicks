import '../hoja-de-estilos/contador.css';
function Contador({ numClicks }){
    return(
        <div className="contador">
            {numClicks}
        </div>
    );
}
export default Contador;