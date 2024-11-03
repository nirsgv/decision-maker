import React from 'react';
import { Button, Drawer } from '@mui/material';

interface BottomDrawerProps {
  open: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ open, onClose, onOpen }) => {
  const handleToggle = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    
    if (isOpen) {
      onOpen?.();
    } else {
      onClose();
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleToggle(true)}>
        Open Bottom Drawer
      </Button>

      <Drawer
        anchor="bottom" // Set to "bottom" to make it a bottom drawer
        open={open}
        onClose={handleToggle(false)}
      >
        <div
          style={{
            height: '200px', // Adjust height as needed
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>Content goes here</p>
        </div>
      </Drawer>
    </div>
  );
};

export default BottomDrawer;
