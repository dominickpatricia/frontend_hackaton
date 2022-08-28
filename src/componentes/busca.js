import GoogleMaps from "simple-react-google-maps"
import { useEffect } from "react";



const Busca = () => {
    
    return (
        // <Container>

        //         <Left>
        //             <Language>Conoce Las sedes Disponibles</Language>
        //             <SearchContainer>
        //                 <Input placeholder="Search" />
        //                 {/* <Search style={{ color: "gray", fontSize: 16 }} /> */}
        //                 <FontAwesomeIcon icon={ FaSearch }style={{ color: "gray", fontSize: 16 }}/>
        //             </SearchContainer>
        // </Left>
        // </Container>
        <div>
            <div className="container">
                <GoogleMaps
                    apikey={"AIzaSyBK1JqlUEvTKollLot5K_frC8VuekJ34U8"}
                    style={{height:"500px",width:"1250"}}
                    zoom={14}
                    center={{
                        lat:-12.1028873,
                        lng:-77.0548533
                    }}
                    markers={[
                        {lat:-12.0967155,lng:-77.0235788},
                        {lat:-12.0925563,lng:-77.0263411},
                        {lat:-12.0954325,lng:-77.0262378}
                    ]} 
                    >

                </GoogleMaps>
            </div>
        </div>

    );
  };

  export default Busca;