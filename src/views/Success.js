import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "./modules/components/Typography";
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";

function Success() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Success!
          </Typography>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Success);
