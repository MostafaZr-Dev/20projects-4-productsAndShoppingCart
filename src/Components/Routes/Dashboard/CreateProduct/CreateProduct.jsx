import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import usePostAPI from "Hooks/usePostAPI";
import Container from "../Container";
import Form from "./Components/Form";
import Toast from "Components/Toast";
import { Progress } from "Components/Progress";
import useGetAPI from "Hooks/useGetAPI";

const allowedTypes = ["image/jpeg", "image/png"];

const validationSchema = Yup.object().shape({
  title: Yup.string().required("فیلد الزامی است!"),
  price: Yup.string().required("فیلد الزامی است!"),
  discountedPrice: Yup.string()
    .required("فیلد الزامی است!")
    .test(
      "valid_value",
      "قیمت تخفیفی باید کمتر از قیمت اصلی باشد!",
      function (value) {
        return parseInt(value) < parseInt(this.parent.price);
      }
    ),
  thumbnail: Yup.mixed()
    .required("تصویر تکی الزامی است!")
    .test("file_type", "پسوند فایل باید jpeg یا png باشد!", (value) => {
      return allowedTypes.includes(value?.type);
    }),
  gallery: Yup.mixed()
    .test("empty", "تصاویر گالری الزامی است!", (values) => {
      return values.length !== 0;
    })
    .test("empty", "حداکثر 5 تصویر", (values) => {
      return values.length <= 5;
    })
    .test("file_type", "پسوند فایل ها باید jpeg یا png باشد!", (values) => {
      const invalidTypes = values.filter(
        (image) => !allowedTypes.includes(image?.file.type)
      );

      return invalidTypes.length === 0;
    }),
});

function CreateProducts() {
  const [progress, setProgress] = useState(0);

  const history = useHistory();

  const [response, postAPI] = usePostAPI({
    url: "/products/create",
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

  const [categoryResponse, getCategoriesFromAPI] = useGetAPI({
    url: "/category",
    headers: {},
  });

  const { isLoading, success, error } = response;
  const {
    data: getCategoriesData,
    success: getCategorySuccess,
    error: getCategoryError,
    isLoading: getCategoryPending,
  } = categoryResponse;

  useEffect(() => {
    getCategoriesFromAPI();
  }, []);

  const handleCreateProduct = (product) => {
    const formData = new FormData();

    formData.append("title", product.title);
    formData.append("thumbnail", product.thumbnail);

    product.gallery.forEach((image) => {
      formData.append("gallery", image.file);
    });

    formData.append("price", product.price);
    formData.append("discountedPrice", product.discountedPrice);
    formData.append("count", product.count);
    formData.append("category", product.category);

    postAPI(formData);
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        history.push("/dashboard/products");
      }, 1800);
    }
  }, [success]);

  return (
    <Container title="ایجاد محصول جدید">
      {isLoading && <Progress isDeterminate={true} progress={progress} />}
      <Toast open={success} type="success" message="محصول با موفقیت ثبت شد." />
      <Form
        onSubmit={handleCreateProduct}
        validationSchema={validationSchema}
        initialValues={{
          title: "",
          thumbnail: null,
          gallery: [],
          price: 1000,
          discountedPrice: 0,
          count: 1,
          category: "",
        }}
        thumbnailPreview={null}
        galleryPreview={[]}
        categories={
          getCategoriesData?.categories ? getCategoriesData?.categories : []
        }
      />
    </Container>
  );
}

export default CreateProducts;
