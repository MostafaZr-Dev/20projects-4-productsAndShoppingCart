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
            <TableCell align="center">عنوان</TableCell>
            <TableCell align="center">نامک(slug)</TableCell>
            <TableCell align="center">عملیات</TableCell>
          </TableRow>
        </StyledHeader>
        <TableBody>
          {data.length > 0 && (
            <>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.title}</TableCell>
                  <TableCell align="center">{item.slug}</TableCell>
                  <TableCell align="center">
                    <StyledTooltip
                      title="ویرایش دسته بندی"
                      aria-label="edit"
                      placement="top"
                    >
                      <IconButton
                        onClick={(e) => {
                          
                        }}
                      >
                        <Edit />
                      </IconButton>
                    </StyledTooltip>
                    <StyledTooltip
                      title="حذف دسته بندی"
                      aria-label="delete"
                      placement="top"
                    >
                      <IconButton
                        onClick={(e) => {
                          
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
                دسته بندی برای نمایش وجود ندارد.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
