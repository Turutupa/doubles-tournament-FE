import { Flex, Link, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://turutupa.com" isExternal>
          turutupa.com
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
