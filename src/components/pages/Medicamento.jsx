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

import AddMedicamento from '../AddMedicamento';
import EditMedicamento from '../EditMedicamento';

import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getMedicamentos,
  createMedicamento,
  updateMedicamento,
  deleteMedicamento,
} from '../../utils/getMedicamento';

const Medicamento = () => {

  const queryClient = useQueryClient();

  const {
    data: medicamento,
    isLoading,
    error,
    isError,
  } = useQuery('medicamento', getMedicamentos);

  const addMedicamentoMutation = useMutation(createMedicamento, {
    onSuccess: () => queryClient.invalidateQueries('medicamento'), 
  });
  const updateMedicamentoMutation = useMutation(updateMedicamento, {
    onSuccess: () => queryClient.invalidateQueries('medicamento'), 
  });
  const deleteMedicamentoMutation = useMutation(deleteMedicamento, {
    onSuccess: () => queryClient.invalidateQueries('medicamento'), 
  });

  return (
    <Box>
      <Box>
        <Typography variant="h3" color="initial">
          Medicamentos
        </Typography>
        <AddMedicamento add={addMedicamentoMutation}/>
      </Box>
      <Divider sx={{ margin: 3 }} variant="middle" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Compuesto</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              medicamento?.map((medicamento) => (
                <TableRow
                  key={medicamento.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{medicamento.id}</TableCell>
                  <TableCell>{medicamento.med_nombre}</TableCell>
                  <TableCell>{medicamento.med_compuesto}</TableCell>
                  <TableCell>
                  <EditMedicamento inputMedicamento={medicamento} edit={updateMedicamentoMutation} />
                  </TableCell>
                  <TableCell>
                    <Button onClick={ () => deleteMedicamentoMutation.mutate({id:medicamento.id}) } >Elimnar</Button>
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

export default Medicamento;