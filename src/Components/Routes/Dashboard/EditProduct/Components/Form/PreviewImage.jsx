import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { styled } from "@material-ui/core/styles";
import React from "react";

const Wrapper = styled(Grid)(({ theme, error }) => ({
  border: "2px solid #eee",
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  borderRadius: "5px",

  ...(!error && {
    borderColor: "green",
  }),
  ...(error && {
    borderColor: "red",
  }),
}));

const StyledBox = styled(Box)(({ theme, error }) => ({
  border: "2px dashed #eee",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexWrap: "wrap",
  textAlign: "center",
  padding: theme.spacing(1),
  borderRadius: "5px",
  minHeight: "380px",

  "& .img": {
    width: "100%",
    marginBottom: theme.spacing(2),
  },

  "& .name": {
    width: "100%",
    wordBreak: "break-word",
  },
}));

function PreviewImage({ images, error, onDelete }) {
  const renderImages = images.map((image, index) => (
    <Grid item xs={12} md={4} key={index}>
      <StyledBox>
        <img className="img" src={image.src} alt="preview_image" />
        <Typography className="name">{image.name}</Typography>
        <IconButton
          onClick={(e) => {
            onDelete(e, image.id);
          }}
        >
          <Delete />
        </IconButton>
      </StyledBox>
    </Grid>
  ));

  return (
    <Wrapper container justify="center" spacing={2} error={error}>
      {renderImages}
    </Wrapper>
  );
}

export default PreviewImage;
