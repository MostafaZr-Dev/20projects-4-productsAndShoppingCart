import {
  ProgressWrapper,
  StyledProgress,
  StyledCircularProgressWrapper,
} from "./ProgressStyles";
import CircularProgressWithLabel from "./Components/CircularProgressWithLabel";

function Progress({ isDeterminate, progress }) {
  return (
    <ProgressWrapper>
      <StyledProgress />
      {isDeterminate && (
        <StyledCircularProgressWrapper>
          <CircularProgressWithLabel value={progress} />
        </StyledCircularProgressWrapper>
      )}
    </ProgressWrapper>
  );
}

export default Progress;
