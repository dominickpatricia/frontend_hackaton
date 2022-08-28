import axios from "axios";


export async function postRegister(payload){
    axios.post('https://bbva-907f5-default-rtdb.firebaseio.com/registro.json', payload).then((response) => {
            /*notification({
                isOpen: true,
                message: "Se ha postulado correctamente!",
                type: "success"
            })*/

            console.log("Todo bien")
            console.log("response",response)
            //setData(response?.data)
            //redirectMain()
    }).catch(error => {
            /*notification({
                isOpen: true,
                message: "Algo salió mal, vuelva a intentarlo!",
                type: "error"
            }    
            )*/
            console.log("Algo salió mal, vuelva a intentarlo!", error)
    })
}