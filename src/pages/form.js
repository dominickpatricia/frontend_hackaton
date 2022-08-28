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

const Form = () => {

    const [documento, setDocumento] = useState('');

    const [mode, setMode] = useState();

    const [valueTime, setValueTime] = useState();

    const handleChange = (event) => {
        setDocumento(event.target.value);
    };

    const handleChangeMode = (event) => {
        setMode(event.target.value)
    }

    return (

        <>
        <Navbar></Navbar> 
            <Grid container sx={{mt:3, pl:12}} >
                <Typography color={'#043263'} fontSize={'36px'} fontWeight={'800'}> Completa el registro de tu ticket </Typography>
            </Grid>
            <LayaoutContainer>
                <Grid container>
                    <Grid item={true} xs={12}  sx={{pl:5, pr:5, mb:4, mt:3}}>
                        <Typography color={'#043263'} fontSize={'32px'} fontWeight={'500'}> Registro por ventanilla </Typography>
                    </Grid>

                    <Grid item={true} xs={4} sx={{pl:5, pr:5, mb:2}}>
                        <Typography color={'#043263'} fontSize={'16px'} fontWeight={'400'}> Documento </Typography>
                    </Grid>

                    <Grid item={true} xs={8} sx={{pl:10, pr:5, mb:2}}>
                        <Typography color={'#043263'} fontSize={'16px'} fontWeight={'400'}> Registro por ventanilla </Typography>
                    </Grid>

                    <Grid item={true} xs={4}  sx={{pl:5, pr:5, mb:2}}>

                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={documento}
                            label="Age"
                            onChange={handleChange}
                            fullWidth
                            size="small"
                            sx={{backgroundColor:'#ffffff', borderRadius:'0px', }} 
                        >
                            <MenuItem value={0}>DNI</MenuItem>
                            <MenuItem value={1}>N° Tarjeta</MenuItem>
                      </Select>
                    </Grid>
                    

                    <Grid item={true} xs={8} sx={{pl:10, pr:5, mb:2}}>
                        <TextField variant="standard" fullWidth sx={{backgroundColor:'#ffffff', }} InputProps={{style:{borderRadius:'0px', disableUnderline: true,}}} size="small"> </TextField>
                    </Grid>

                    <Grid item={true} xs={12} sx={{pl:5, pr:5, mb:2}}>
                        <Typography color={'#043263'} fontSize={'16px'} fontWeight={'400'}> Correo electrónico </Typography>
                    </Grid>

                    <Grid item={true} xs={12} sx={{pl:5, pr:5, mb:2}}>
                        <TextField fullWidth sx={{backgroundColor:'#ffffff'}} InputProps={{style:{borderRadius:'0px'}}} size="small"> </TextField>
                    </Grid>

                    <Grid item={true} xs={4} sx={{pl:5, pr:5, mb:2}}>
                        <Typography color={'#043263'} fontSize={'16px'} fontWeight={'400'}> Tipo de registro </Typography>
                    </Grid>

                    <Grid item={true} xs={8} sx={{pl:10, pr:5}}>
                        <Typography color={'#043263'} fontSize={'16px'} fontWeight={'400'}> Hora estimada </Typography>
                    </Grid>

                    <Grid item={true} xs={4} sx={{pl:5, pr:5}}>
                       
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
                    
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid item={true} xs={8} sx={{pl:10, pr:5}}>
                        <TimePicker
                        label="Time"
                        value={valueTime}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>
                    </LocalizationProvider>
                    
                    <Grid item={true} xs={12} sx={{pl:'40%', pr:'40%', mt:4, mb:4 }}>
                        <Button fullWidth sx={{height:'150%', backgroundColor:'#028484', color:'#ffff', ":hover":{backgroundColor:'#2DCCCD'}}}> Registrar </Button>
                    </Grid>

                </Grid>

            </LayaoutContainer>
      </>
    );
  };
  
  export default Form;  