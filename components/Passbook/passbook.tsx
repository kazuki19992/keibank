import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function Passbook() {
  const [passbookTableData, setTableData] = React.useState<JSX.Element[]>([])
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const betdata = localStorage.getItem('betdata')

      let tableViewData = null
      if(betdata){
        // データが存在していれば出す
        const betList = JSON.parse(betdata)
        console.log(betList)
        const betDataAdd = []
        for(const betData of betList) {
          console.log(betData)
          const name = <TableCell component="th" scope="row">{betData.name + " (" + betData.grade + ")"}</TableCell>
          const date = <TableCell>{betData.date}</TableCell>
          const bet = <TableCell align="right">{betData.bet}</TableCell>
          const ret = <TableCell align="right">{betData.return}</TableCell>
          const balance = <TableCell align="right">{betData.balance}</TableCell>

          const jsx = <TableRow>{name}{date}{bet}{ret}{balance}</TableRow>
          betDataAdd.unshift(jsx)
        }
        setTableData(betDataAdd)
      }
    }
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>レース名</TableCell>
            <TableCell>開催日</TableCell>
            <TableCell align="right">購入</TableCell>
            <TableCell align="right">払戻</TableCell>
            <TableCell align="right">収支</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
          {passbookTableData}
        </TableBody>
      </Table>
    </TableContainer>
  );
}