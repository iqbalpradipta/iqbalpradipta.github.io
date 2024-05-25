const Scrollbar = () => {
    return {
      scrollBox: {
        overflowY: 'auto',
        maxHeight: '400vh',
        '&::-webkit-scrollbar': {
          width: '9px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#fcb5a5',
          borderRadius: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#794639',
          borderRadius: '5px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555',
        },
      },
    };
  };
  
  export default Scrollbar;