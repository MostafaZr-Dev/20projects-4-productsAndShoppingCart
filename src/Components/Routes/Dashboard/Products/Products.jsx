import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

import Container from "../Container";
import Table from "./Components/Table";
import DeleteActions from "./Components/DeleteActions";
import useGetAPI from "Hooks/useGetAPI";
import useDeleteAPI from "Hooks/useDeleteAPI";
import { TableSkeleton } from "Components/Skeleton";
import Modal from "Components/Modal";
import Toast from "Components/Toast";

function Products() {
  const [isDelete, setIsDelete] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const history = useHistory();

  const [response, getProductsFromAPI] = useGetAPI({
    url: "/products",
    headers: {},
  });

  const [deleteResponse, deleteProductAPI] = useDeleteAPI({
    url: `/products/${selectedProduct?.id}`,
    configs: {},
  });

  const { data, success, error, isLoading } = response;

  const {
    data: deleteData,
    success: deleteSuccess,
    error: deleteError,
    isLoading: deleteIsLoading,
  } = deleteResponse;

  useEffect(() => {
    getProductsFromAPI();
  }, []);

  useEffect(() => {
    if (deleteSuccess) {
      setTimeout(() => {
        history.push("/");
        history.replace("/dashboard/products");
      }, 1800);
    }
  }, [deleteSuccess]);

  const handleCloseDeleteModal = () => {
    setIsDelete(false);
  };

  const handleDeleteProduct = (e, product) => {
    setSelectedProduct(product);
    setIsDelete(true);
  };

  const handleEditProduct = (e, id) => {
    history.push(`/dashboard/products/${id}/edit`);
  };

  const DeleteProduct = (e) => {
    deleteProductAPI();
  };
  
  return (
    <Container title="لیست محصولات">
      <Toast
        open={deleteSuccess}
        type="success"
        message="محصول با موفقیت حذف شد."
      />
      {isLoading && <TableSkeleton />}
      {!isLoading && (
        <Table
          data={data.products ? data.products : null}
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
        />
      )}

      <Modal
        title={`حذف محصول [ ${selectedProduct?.title} ]`}
        open={isDelete}
        onClose={handleCloseDeleteModal}
        actions={
          <DeleteActions
            onAccept={DeleteProduct}
            onCancel={handleCloseDeleteModal}
          />
        }
        maxWidth="sm"
      >
        <Typography>آیا مطئنید ؟</Typography>
      </Modal>
    </Container>
  );
}

export default Products;
