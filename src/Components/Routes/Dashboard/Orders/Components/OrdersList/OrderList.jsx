import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Table,
  IconButton,
  Chip,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { StyledHeader } from "./OrdersListStyles";

function OrderList({ orders }) {
  const renderOrders = orders.map((order) => (
    <TableRow key={order.id}>
      <TableCell align="center">#</TableCell>
      <TableCell align="center">{order.user.displayName}</TableCell>
      <TableCell align="center">{order.totalPrice}</TableCell>
      <TableCell align="center">{order.createdAt.fa}</TableCell>
      <TableCell align="center">{order.updatedAt.fa}</TableCell>
      <TableCell align="center">
        <Chip size="small" label={order.status.title} color="secondary" />
      </TableCell>
      <TableCell align="center">
        <IconButton>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <StyledHeader>
          <TableRow>
            <TableCell align="center">شناسه</TableCell>
            <TableCell align="center">کاربر</TableCell>
            <TableCell align="center">قیمت کل سفارش</TableCell>
            <TableCell align="center">تاریخ ایجاد</TableCell>
            <TableCell align="center">تاریخ بروزرسانی</TableCell>
            <TableCell align="center">وضعیت</TableCell>
            <TableCell align="center">عملیات</TableCell>
          </TableRow>
        </StyledHeader>
        <TableBody>
          {orders.length > 0 && <> {renderOrders} </>}
          {orders.length === 0 && (
            <TableRow>
              <TableCell colSpan={8} align="center">
                سفارشی ثبت نشده است
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderList;
