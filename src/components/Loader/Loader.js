import { ThreeDots } from 'react-loader-spinner';
import { Box } from './Loader.styled';
export const Loader = () => {
  return (
    <Box className="wrapper">
      <ThreeDots color="#3f51b5" />
    </Box>
  );
};
