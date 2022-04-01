import { Grid, GridItem } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const DashboardElement = (): ReactElement => (
  <Grid templateAreas="'banks transactions transactions'" gap="40px" h="300px">
    <GridItem gridArea="banks"></GridItem>
    <GridItem gridArea="transactions"></GridItem>
  </Grid>
);

export default DashboardElement;
