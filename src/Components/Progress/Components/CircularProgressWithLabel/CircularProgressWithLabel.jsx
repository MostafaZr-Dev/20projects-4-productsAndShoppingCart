import { Box, CircularProgress, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const StyledBox = styled(Box)({
  color: "#fff",
});

const StyledCircularProgress = styled(CircularProgress)({
  color: "#ff9800",
});

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <StyledCircularProgress variant="determinate" size={60} {...props} />
      <StyledBox
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div">{`${Math.round(
          props.value
        )}%`}</Typography>
      </StyledBox>
    </Box>
  );
}

export default CircularProgressWithLabel;
