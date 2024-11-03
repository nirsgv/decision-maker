import { FC } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

const OptionsIconButton: FC = () => {
  return (
    <IconButton aria-label="options">
      <MoreVertIcon />
    </IconButton>
  );
};

export default OptionsIconButton;
