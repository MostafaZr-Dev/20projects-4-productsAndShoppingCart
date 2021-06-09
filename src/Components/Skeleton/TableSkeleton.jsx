import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Table,
  TableHead,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

function TableSkeleton() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Skeleton variant="rect" height={40} />
            </TableCell>
            <TableCell align="center">
              <Skeleton variant="rect" height={40} />
            </TableCell>
            <TableCell align="center">
              <Skeleton variant="rect" height={40} />
            </TableCell>
            <TableCell align="center">
              <Skeleton variant="rect" height={40} />
            </TableCell>
            <TableCell align="center">
              <Skeleton variant="rect" height={40} />
            </TableCell>
            <TableCell align="center">
              <Skeleton variant="rect" height={40} />
            </TableCell>
            <TableCell align="center">
              <Skeleton variant="rect" height={40} />
            </TableCell>
            <TableCell align="center">
              <Skeleton variant="rect" height={40} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" colSpan={8}>
              <Skeleton variant="rect" height={40} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={8}>
              <Skeleton variant="rect" height={40} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={8}>
              <Skeleton variant="rect" height={40} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableSkeleton;
