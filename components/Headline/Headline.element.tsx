import React, { ReactElement } from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

type Props = HeadingProps & { as: "h2" | "h3" | "h4" };

const HeadlineElement = ({ as, ...props }: Props): ReactElement => (
  <>
    {as === "h2" && (
      <Heading as="h2" fontSize="3rem" fontWeight="700" lineHeight="3.6rem" {...props} />
    )}
    {as === "h3" && (
      <Heading as="h3" fontSize="2.4rem" fontWeight="700" lineHeight="3rem" {...props} />
    )}
    {as === "h4" && (
      <Heading as="h4" fontSize="2rem" fontWeight="400" lineHeight="2.6rem" {...props} />
    )}
  </>
);

export default HeadlineElement;
