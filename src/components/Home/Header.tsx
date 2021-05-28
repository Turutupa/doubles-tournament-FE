import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Heading, Badge } from "@chakra-ui/layout";

const SomeText = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Heading as="h2" fontSize="3xl" mt={10}>
        Welcome to{" "}
        <Badge colorScheme="pink" size="xxl" fontSize={24}>
          Doubles-Tournament
        </Badge>
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
        mt={5}
      >
        <Box d="flex" alignItems="center" fontSize="sm">
          Create Brackets and Round Robin Tournaments for volleyball, bridge,
          doubles tennis... you name it!
        </Box>
      </Box>
    </>
  );
};

export default SomeText;
