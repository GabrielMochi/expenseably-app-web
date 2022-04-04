import { Grid, GridItem } from "@chakra-ui/react";
import BanksCard from "components/BanksCard";
import TransactionsCard from "components/TransactionsCard";
import React, { ReactElement } from "react";

const DashboardElement = (): ReactElement => (
  <Grid templateColumns="repeat(3, 1fr)" gap="40px" h="300px">
    <GridItem>
      <BanksCard />
    </GridItem>
    <GridItem colSpan={2}>
      <TransactionsCard />
    </GridItem>
  </Grid>
);

export default DashboardElement;
