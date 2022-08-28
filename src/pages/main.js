import Navbar from "../componentes/navbar";
import Busca from "../componentes/busca";
import db from "../service/Firebase";
import { useEffect } from "react";

const Main = () => {

  useEffect(() => {

    const response=db.collection('oficinas');
    
    const unsubscribe = response.onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        datos: doc.data(),
      }));

      console.log(data)
    
    });
  }, [])


    return (
      <div>
      
      <Navbar />
      <Busca />
      
      
      
      </div>
    );
  };
  
  export default Main;