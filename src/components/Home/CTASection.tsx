import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { AiFillGithub } from "react-icons/ai";

const CTASection = () => {
  return (
    <Box textAlign="center" marginTop={8}>
      <Link href="https://github.com/turutupa/doubles-tournament-FE" isExternal>
        <Button leftIcon={<AiFillGithub />}>Open in Github</Button>
      </Link>
    </Box>
  );
};

export default CTASection;
