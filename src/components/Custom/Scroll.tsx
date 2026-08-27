const Scrollbar = () => {
  return {
    scrollBox: {
      overflowY: "auto",
      scrollbarWidth: "thin",
      scrollbarColor: "rgba(243, 237, 226, 0.25) transparent",
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(243, 237, 226, 0.22)",
        borderRadius: "999px",
        border: "2px solid transparent",
        backgroundClip: "padding-box",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "var(--color-accent)",
      },
    },
  };
};

export default Scrollbar;