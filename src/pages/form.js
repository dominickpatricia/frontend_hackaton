import { LayaoutContainer } from "../styles/Main.style";
import { Typography, Grid, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleDown } from "react-icons/fa";
import Navbar from "../componentes/navbar";
import { useState, useContext, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './../App.css'
import db from "../service/Firebase";
import axios from "axios";

import * as apisServices from '../services/apis'

const Form = () => {

    const [cargando, setCargando] = useState(false);

    const [documento, setDocumento] = useState('');

    const [mode, setMode] = useState();

    const [documentType, setDocumentType] = useState();

    const [email, setEmail] = useState();

    const [valueTime, setValueTime] = useState();

    const handleChangeDocument = (event) => {
        setDocumento(event.target.value);
    };

    const handleChangeDocumentType = (event) => {
        setDocumentType(event.target.value);
    };

    const handleChangeMode = (event) => {
        setMode(event.target.value)
    }

    const handleChangeDateTime= (e) => {
        setValueTime(e?.$d)
    }

    const handleChangeEmail= (event) => {
        setEmail(event.target.value)
    }

    function register(){
        let payload = {'dt': documentType, 'd': documento, 'email': email, 'mode': mode, 'time': valueTime}
        console.log("payload", payload)

        let routeToPost = 'https://bbva-907f5-default-rtdb.firebaseio.com/registro.json'

        apisServices.postRegister(payload)
    }

    useEffect(() => {

        const response=db.collection('registros');
    
        
        const unsubscribe = response.onSnapshot(querySnapshot => {
          const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            datos: doc.data(),
          }));

          console.log(data)
        
        });
    }, [cargando])


    return (

        <>
        <Navbar></Navbar> 
            <Grid container sx={{mt:3, pl:12}} >
                <Typography color={'#043263'} fontSize={'36px'} fontWeight={'800'} fontFamily={'BentonSansBBVA-Bold'}> Completa el registro de tu ticket! </Typography>
            </Grid>
            <LayaoutContainer>
                <Grid container>
                    <Grid item={true} xs={12}  sx={{pl:5, pr:5, mb:4, mt:3}}>
                        <Typography color={'#043263'} fontSize={'32px'} fontWeight={'500'} fontFamily={'BentonSansBBVA-Medium'}> Registro por ventanilla </Typography>
                    </Grid>

                    <Grid item={true} xs={4} sx={{pl:5, pr:5, mb:2}}>
                        <Typography color={'#043263'} fontSize={'16px'} fontWeight={'400'} fontFamily={'BentonSansBBVA-Medium'}> Documento </Typography>
                    </Grid>

                    <Grid item={true} xs={8} sx={{pl:10, pr:5, mb:2}}>
                        <Typography color={'#043263'} fontSize={'16px'} fontWeight={'400'} fontFamily={'BentonSansBBVA-Medium'}> Registro por ventanilla </Typography>
                    </Grid>

                    <Grid item={true} xs={4}  sx={{pl:5, pr:5, mb:2}}>

                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={documentType}
                            label="Age"
                            onChange={handleChangeDocumentType}
                            fullWidth
                            size="small"
                            sx={{backgroundColor:'#ffffff', borderRadius:'0px', }} 
                        >
                            <MenuItem value={0}>DNI</MenuItem>
                            <MenuItem value={1}>N° Tarjeta</MenuItem>
                      </Select>
                    </Grid>
                    

                    <Grid item={true} xs={12} lg={8} sx={{pl:10, pr:5, mb:2}}>
                        <TextField onChange={handleChangeDocument} fullWidth sx={{backgroundColor:'#ffffff', ":hover":{ borderColor: '#043263', } }} InputProps={{style:{borderRadius:'0px', }}} size="small"> </TextField>
                    </Grid>

                    <Grid item={true} xs={12} sx={{pl:5, pr:5, mb:2}}>
                        <Typography color={'#043263'} fontSize={'16px'} fontWeight={'400'} fontFamily={'BentonSansBBVA-Medium'}> Correo electrónico </Typography>
                    </Grid>

                    <Grid item={true} xs={12} sx={{pl:5, pr:5, mb:2}}>
                        <TextField onChange={handleChangeEmail} fullWidth sx={{backgroundColor:'#ffffff'}} InputProps={{style:{borderRadius:'0px'}}} size="small"> </TextField>
                    </Grid>

                    <Grid item={true} xs={12} lg={4} sx={{pl:5, pr:5, mb:2}}>
                        <Typography color={'#043263'} fontSize={'16px'} fontWeight={'400'} fontFamily={'BentonSansBBVA-Medium'}> Tipo de registro </Typography>
                    </Grid>

                    <Grid item={true} xs={12} lg={8} sx={{pl:10, pr:5}}>
                        <Typography  color={'#043263'} fontSize={'16px'} fontWeight={'400'} fontFamily={'BentonSansBBVA-Medium'}> Hora estimada </Typography>
                    </Grid>

                    <Grid item={true} xs={12} lg={4} sx={{pl:5, pr:5}}>
                       
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={mode}
                            label="Age"
                            onChange={handleChangeMode}
                            fullWidth
                            size="small"
                            sx={{backgroundColor:'#ffffff', borderRadius:'0px', }} 
                        >
                            <MenuItem value={0}>Cajeros (ATM)</MenuItem>
                            <MenuItem value={1}>Plataformas y ventanilla</MenuItem>
                      </Select>
                    </Grid>
                    
                    <Grid item={true} xs={12} lg={8} sx={{pl:10, pr:5}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    
                        <TimePicker
                        label="Time"
                        value={valueTime}
                        onChange={(valueTime) => handleChangeDateTime(valueTime)}
                        
                        renderInput={(params) => <TextField {...params} size="small" fullWidth/>}
                        />
                    </LocalizationProvider>
                    </Grid>
                    
                    <Grid item={true} xs={12} lg={12} sx={{pl:'40%', pr:'40%', mt:4, mb:4 }}>
                        <Button fullWidth sx={{height:'150%', backgroundColor:'#028484', color:'#ffff', ":hover":{backgroundColor:'#2DCCCD'}}} onClick={()=>register()}> Registrar </Button>
                    </Grid>

                </Grid>

            </LayaoutContainer>
      </>
    );
  };
  
  export default Form;  