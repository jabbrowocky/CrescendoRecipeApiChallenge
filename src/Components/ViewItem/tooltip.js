import React from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';


export default function SimplePopover({children}) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" style={{backgroundColor: 'transparent', color: '#FD5523', fontWeight: 600, boxShadow:'none', paddingLeft: '0'}} onClick={handleClick}>
        View Special
      </Button>
      <Popover
        id={id}
        open={open}       
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {children}
      </Popover>
    </div>
  );
}
