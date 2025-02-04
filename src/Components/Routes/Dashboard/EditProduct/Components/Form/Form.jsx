import { useRef, useState } from "react";
import {
  Grid,
  TextField,
  InputLabel,
  FormHelperText,
  Box,
  Button,
} from "@material-ui/core";
import { Formik } from "formik";

import { StyledFormControl } from "./FormStyles";
import PreviewImage from "./PreviewImage";
import { generateID } from "Services/hashService";

function Form({
  onSubmit,
  validationSchema,
  initialValues,
  thumbnailPreview,
  galleryPreview,
  onDeleteGallery,
}) {
  const [thumbnail, setThumbnail] = useState(thumbnailPreview);

  const thumbnailRef = useRef();
  const galleryRef = useRef();

  let formikRef = useRef();

  const handleFileBtnClick = (isSingle) => {
    isSingle ? thumbnailRef.current.click() : galleryRef.current.click();
  };

  const handleChangeThumbnail = (e, setFieldValue) => {
    const file = e.currentTarget.files[0];

    setThumbnail({
      src: URL.createObjectURL(file),
      name: file.name,
    });

    setFieldValue("thumbnail", file);
  };

  const galleryImages = useRef(galleryPreview);
  const deletedImage = useRef([]);

  const handleChangeGallery = (e, setFieldValue) => {
    const files = e.currentTarget.files;

    [...files].forEach((file) => {
      galleryImages.current.push({
        id: generateID(),
        src: URL.createObjectURL(file),
        name: file.name,
        file,
      });
    });

    setFieldValue("gallery", galleryImages.current);
  };

  const handleDeleteThumbnail = (e) => {
    setThumbnail(null);
    formikRef.current.setFieldValue("thumbnail", null);
  };

  const onDeleteGalleryImage = (e, id) => {
    const newGalleryImages = galleryImages.current.filter(
      (image) => image.id !== id
    );

    galleryImages.current = newGalleryImages;

    const newGallery = formikRef.current.values.gallery.filter(
      (image) => image.id !== id
    );

    formikRef.current.setFieldValue("gallery", newGallery);

    galleryPreview.forEach((image) => {
      if (image.id === id) {
        deletedImage.current.push(image.id);
      }
    });

    if (onDeleteGallery && deletedImage.current.length > 0) {
      onDeleteGallery(deletedImage.current);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      innerRef={(p) => (formikRef.current = p)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        submitForm,
        setFieldValue,
      }) => (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              id="product-title"
              label="عنوان"
              variant="outlined"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              error={errors.title ? true : false}
              helperText={errors.title && touched.title ? errors.title : null}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              id="product-price"
              label="قیمت"
              variant="outlined"
              name="price"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              error={errors.price ? true : false}
              helperText={errors.price && touched.price ? errors.price : null}
              fullWidth
              InputProps={{ inputProps: { min: 1 } }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              id="product-discount"
              type="number"
              label="قیمت با تخفیف"
              name="discountedPrice"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.discountedPrice}
              error={errors.discountedPrice ? true : false}
              helperText={
                errors.discountedPrice && touched.discountedPrice
                  ? errors.discountedPrice
                  : null
              }
              fullWidth
              InputProps={{ inputProps: { min: 1 } }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              id="product-count"
              type="number"
              label="تعداد"
              name="count"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.count}
              error={errors.count ? true : false}
              helperText={errors.count && touched.count ? errors.count : null}
              fullWidth
              InputProps={{ inputProps: { min: 1 } }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <StyledFormControl fullWidth>
              <InputLabel className="label">تصویر تکی</InputLabel>
              <input
                type="file"
                name="thumbnail"
                id="product-thumbnail"
                aria-describedby="my-helper-text"
                hidden
                ref={thumbnailRef}
                onChange={(e) => {
                  handleChangeThumbnail(e, setFieldValue);
                }}
              />
              <Box>
                <Button
                  className="file-btn"
                  onClick={(e) => handleFileBtnClick(true)}
                >
                  انتخاب تصویر
                </Button>
              </Box>
              <FormHelperText id="my-helper-text">
                فرمت های مجاز : jpeg - png
              </FormHelperText>
            </StyledFormControl>
          </Grid>
          {thumbnail && (
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <PreviewImage
                images={[thumbnail]}
                error={errors?.thumbnail ? true : false}
                onDelete={handleDeleteThumbnail}
              />
            </Grid>
          )}
          {errors.thumbnail && touched.thumbnail && (
            <FormHelperText id="product-gallery-error" error>
              {errors.thumbnail}
            </FormHelperText>
          )}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <StyledFormControl fullWidth>
              <InputLabel className="label">تصاویر گالری</InputLabel>
              <Box>
                <Button
                  className="file-btn"
                  onClick={(e) => handleFileBtnClick(false)}
                >
                  انتخاب تصویر
                </Button>
              </Box>
              <input
                type="file"
                name="gallery"
                id="product-gallery"
                aria-describedby="my-helper-text"
                hidden
                ref={galleryRef}
                multiple
                onChange={(e) => {
                  handleChangeGallery(e, setFieldValue);
                }}
              />
              <FormHelperText id="product-gallery">
                فرمت های مجاز : jpeg - png
              </FormHelperText>
            </StyledFormControl>
          </Grid>
          {galleryImages.current.length > 0 && (
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <PreviewImage
                images={galleryImages.current}
                error={errors?.gallery ? true : false}
                onDelete={onDeleteGalleryImage}
              />
            </Grid>
          )}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {errors.gallery && touched.gallery && (
              <FormHelperText id="product-gallery-error" error>
                {errors.gallery}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <StyledFormControl>
              <Button className="create-btn" onClick={submitForm}>
                ویرایش
              </Button>
            </StyledFormControl>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
}

export default Form;
