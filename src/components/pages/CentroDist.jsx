import { Button, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import AddCentroDist from '../AddCentroDist';
import EditCentroDist from '../EditCentroDist';

import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getCentroDists,
  createCentroDist,
  updateCentroDist,
  deleteCentroDist,
} from '../../utils/getCentroDist';

const CentroDist = () => {

  const queryClient = useQueryClient();

  const {
    data: centro_distribucion,
    isLoading,
    error,
    isError,
  } = useQuery('centro_distribucion', getCentroDists);

  const addCentroDistMutation = useMutation(createCentroDist, {
    onSuccess: () => queryClient.invalidateQueries('centro_distribucion'), 
  });
  const updateCentroDistMutation = useMutation(updateCentroDist, {
    onSuccess: () => queryClient.invalidateQueries('centro_distribucion'), 
  });
  const deleteCentroDistMutation = useMutation(deleteCentroDist, {
    onSuccess: () => queryClient.invalidateQueries('centro_distribucion'), 
  });

  return (
    <Box>
      <Box>
        <Typography variant="h3" color="initial">
          Centro de Distribución
        </Typography>
        <AddCentroDist add={addCentroDistMutation}/>
      </Box>
      <Divider sx={{ margin: 3 }} variant="middle" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Codigo</TableCell>
              <TableCell>Direccion</TableCell>
              <TableCell>Telefono</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              centro_distribucion?.map((centro_distribucion) => (
                <TableRow
                  key={centro_distribucion.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{centro_distribucion.id}</TableCell>
                  <TableCell>{centro_distribucion.cd_codigo}</TableCell>
                  <TableCell>{centro_distribucion.cd_direccion}</TableCell>
                  <TableCell>{centro_distribucion.cd_telefono}</TableCell>
                  <TableCell>
                  <EditCentroDist inputCentroDist={centro_distribucion} edit={updateCentroDistMutation} />
                  </TableCell>
                  <TableCell>
                    <Button onClick={ () => deleteCentroDistMutation.mutate({id:centro_distribucion.id}) } >Elimnar</Button>
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

export default CentroDist;