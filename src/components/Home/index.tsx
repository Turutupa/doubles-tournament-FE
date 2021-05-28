import { Box } from "@chakra-ui/layout";
import Header from "./Header";
import Image from "./Image";
import CTASection from "./CTASection";
import CreateTournament from "./CreateTournament";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <Header />
      <CreateTournament />
      <Image />
      <CTASection />
    </Box>
  );
};

export default Home;
