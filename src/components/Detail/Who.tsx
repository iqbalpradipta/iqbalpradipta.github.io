import { Box, Typography } from "@mui/material";

function Who() {
  return (
    <>
      <Box
        sx={{ border: "1px solid #ad8269", borderRadius: "10px", p: "20px" }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Who am I ?
        </Typography>
        <Typography>
          As a backend developer, I leverage my keen eye for detail, passion for
          building, and mission-focused approach to drive meaningful change. I'm
          eager to contribute and make a substantial impact at a dynamic,
          fast-growing company.
        </Typography>
      </Box>
    </>
  );
}

export default Who;
