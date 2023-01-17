import { Button, Divider, Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useState } from 'react';

import AddFarmacia from '../AddFarmacia';
import EditFarmacia from '../EditFarmacia';

import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getFarmacias,
  createFarmacia,
  updateFarmacia,
  deleteFarmacia,
} from '../../utils/getFarmacia';
const Farmacia = () => {

  const queryClient = useQueryClient();

  const {
    data: farmacia,
    isLoading,
    error,
    isError,
  } = useQuery('farmacia', getFarmacias);

  const addFarmaciaMutation = useMutation(createFarmacia, {
    onSuccess: () => queryClient.invalidateQueries('farmacia'), // Invalidate cache and refetch
  });
  const updateFarmaciaMutation = useMutation(updateFarmacia, {
    onSuccess: () => queryClient.invalidateQueries('farmacia'), // Invalidate cache and refetch
  });
  const deleteFarmaciaMutation = useMutation(deleteFarmacia, {
    onSuccess: () => queryClient.invalidateQueries('farmacia'), // Invalidate cache and refetch
  });

  return (
    <Box>
      <Box>
        <Typography variant="h3" color="initial">
          Farmacias
        </Typography>
        <AddFarmacia add={addFarmaciaMutation}/>
      </Box>
      <Divider sx={{ margin: 3 }} variant="middle" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Direccion</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              farmacia?.map((farmacia) => (
                <TableRow
                  key={farmacia.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{farmacia.id}</TableCell>
                  <TableCell>{farmacia.farm_nombre}</TableCell>
                  <TableCell>{farmacia.farm_direccion}</TableCell>
                  <TableCell>{farmacia.farm_mail}</TableCell>
                  <TableCell>
                  <EditFarmacia inputFarmacia={farmacia} edit={updateFarmaciaMutation} />
                  </TableCell>
                  <TableCell>
                    <Button onClick={ () => deleteFarmaciaMutation.mutate({id:farmacia.id}) } >Elimnar</Button>
                  </TableCell>
                  </TableRow>
              ))  
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Farmacia;
