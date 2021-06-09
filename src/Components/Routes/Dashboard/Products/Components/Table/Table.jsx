import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Table,
  IconButton,
} from "@material-ui/core";
import { Edit, Delete, Image } from "@material-ui/icons";

import { StyledHeader, StyledTooltip, ProductThumbnail } from "./TableStyles";

function CustomTable({ data, onEdit, onDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <StyledHeader>
          <TableRow>
            <TableCell align="center">تصویر</TableCell>
            <TableCell align="center">عنوان</TableCell>
            <TableCell align="center">قیمت</TableCell>
            <TableCell align="center">قیمت با تخفیف</TableCell>
            <TableCell align="center">تعداد</TableCell>
            <TableCell align="center">تعداد فروش</TableCell>
            <TableCell align="center">تاریخ ایجاد</TableCell>
            <TableCell align="center">عملیات</TableCell>
          </TableRow>
        </StyledHeader>
        <TableBody>
          {data.length > 0 && (
            <>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    <ProductThumbnail
                      alt="product-img"
                      src={item.thumbnail}
                      sizes="60"
                    >
                      <Image />
                    </ProductThumbnail>
                  </TableCell>
                  <TableCell align="center">{item.title}</TableCell>
                  <TableCell align="center">{item.price}</TableCell>
                  <TableCell align="center">
                    {item.discountedPrice > 0 ? item.discountedPrice : "-"}
                  </TableCell>
                  <TableCell align="center">{item.count}</TableCell>
                  <TableCell align="center">{item.soldCount}</TableCell>
                  <TableCell align="center">{item.createdAt.fa}</TableCell>
                  <TableCell align="center">
                    <StyledTooltip
                      title="ویرایش محصول"
                      aria-label="edit"
                      placement="top"
                    >
                      <IconButton
                        onClick={(e) => {
                          onEdit(e, item.id);
                        }}
                      >
                        <Edit />
                      </IconButton>
                    </StyledTooltip>
                    <StyledTooltip
                      title="حذف محصول"
                      aria-label="delete"
                      placement="top"
                    >
                      <IconButton
                        onClick={(e) => {
                          onDelete(e, { id: item.id, title: item.title });
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </StyledTooltip>
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
          {data.length === 0 && (
            <TableRow>
              <TableCell colSpan={8} align="center">
                محصولی برای نمایش وجود ندارد.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
