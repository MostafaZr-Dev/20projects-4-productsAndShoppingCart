import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";

import Container from "../Container";
import Form from "./Components/Form";
import useGetAPI from "Hooks/useGetAPI";
import usePutAPI from "Hooks/usePutAPI";
import { Progress } from "Components/Progress";
import Toast from "Components/Toast";

const allowedTypes = ["image/jpeg", "image/png"];

const validationSchema = Yup.object().shape({
  title: Yup.string().required("فیلد الزامی است!"),
  thumbnail: Yup.mixed().test(
    "file_type",
    "پسوند فایل باید jpeg یا png باشد!",
    (value) => {
      if (!value) {
        return true;
      }

      return allowedTypes.includes(value?.type);
    }
  ),
  gallery: Yup.mixed()
    .test("empty", "حداکثر 5 تصویر", (values) => {
      return values.length <= 5;
    })
    .test("file_type", "پسوند فایل ها باید jpeg یا png باشد!", (values) => {
      if (values.length === 0) {
        return true;
      }

      const invalidTypes = values.filter(
        (image) => !allowedTypes.includes(image?.file.type)
      );

      return invalidTypes.length === 0;
    }),
});

function EditProduct() {
  const [deletedImages, setDeletedImages] = useState(null);
  const [progress, setProgress] = useState(0);

  const { id } = useParams();
  const history = useHistory();

  const [response, getProductById] = useGetAPI({
    url: `/products/${id}`,
    headers: {},
  });

  const [editResponse, editProduct] = usePutAPI({
    url: `/products/${id}/edit`,
    configs: {
      headers: {
        "content-type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        const precent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );

        setProgress(precent);
      },
    },
  });

  const { data, success, error, isLoading } = response;

  const {
    data: editReqData,
    success: editReqSuccess,
    error: editReqError,
    isLoading: editReqIsLoading,
  } = editResponse;

  useEffect(() => {
    getProductById();
  }, []);

  useEffect(() => {
    if (editReqSuccess) {
      setTimeout(() => {
        history.push("/dashboard/products");
      }, 1800);
    }
  }, [editReqSuccess]);

  const handleDeleteGalleryImage = (images) => {
    setDeletedImages(images);
  };

  const handleEditProduct = (product) => {
    const formData = new FormData();

    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("discountedPrice", product.discountedPrice);
    formData.append("count", product.count);
    formData.append("deletedGalleryImages", JSON.stringify(deletedImages));

    if (!product.thumbnail) {
      formData.append("thumbnail", null);
    } else {
      formData.append("thumbnail", product.thumbnail);
    }

    if (product.gallery.length === 0) {
      formData.append("gallery", null);
    } else {
      product.gallery.forEach((image) => {
        formData.append("gallery", image.file);
      });
    }

    editProduct(formData);
  };

  return (
    <Container title="ویرایش محصول">
      {isLoading && <Progress />}
      {editReqIsLoading && (
        <Progress isDeterminate={true} progress={progress} />
      )}
      <Toast
        open={editReqSuccess}
        type="success"
        message="محصول با موفقیت ویرایش شد."
      />
      {!isLoading && (
        <Form
          onSubmit={handleEditProduct}
          validationSchema={validationSchema}
          initialValues={{
            title: data?.product.title,
            thumbnail: null,
            gallery: [],
            price: data?.product.price,
            discountedPrice: data?.product.discountedPrice,
            count: data?.product.count,
          }}
          thumbnailPreview={{
            src: data?.product.thumbnail,
            name: data?.product.thumbnail.split("/").pop(),
          }}
          galleryPreview={data?.product.gallery.map((image) => ({
            id: image.id,
            src: image.path,
            name: image.path.split("/").pop(),
            file: {
              type: "image/jpeg",
            },
          }))}
          onDeleteGallery={handleDeleteGalleryImage}
        />
      )}
    </Container>
  );
}

export default EditProduct;
