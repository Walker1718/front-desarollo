import { useState } from 'react';
import {
    Button,
    Card,
    CardActions,
    Container,
    Grid,
  } from "@mui/material";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from "@mui/material/Input";
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const AddFarmacia = ({add}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, control, handleSubmit, watch, formState: { errors, isSubmitted } } = useForm();

  const onSubmit = data => {
    setOpen(false)
    add.mutate(data)
  };

  
  return (
    <div>
        <Button onClick={handleOpen}>Añadir farmacia</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmit)}>

        <div>
            <label>Ingresa nombre farmacia:      
                <input {...register("farm_nombre",{ required: true })}  /> 
            </label>
        </div>
        {errors?.farm_nombre && <span> Campo requerido </span>}
        
       <div>
            <label>Ingresa dirección::      
                <input {...register("farm_direccion", { required: true })} />
            </label>
       </div>
        {errors?.farm_direccion && <span>Campo requerido </span>}
       <div>
            <label>Ingresa email:      
                <input {...register("farm_mail", { required: true })} />
            </label>  
       </div>
        {errors?.farm_mail && <span>Campo requerido</span>}
        
        <Button type="submit" variant="text">Enviar</Button>
        </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddFarmacia