import React, { useState } from "react";
import { FormControl, FormLabel, Flex, Button } from "@chakra-ui/react";
import { CgGames } from "react-icons/cg";
import {
  ROUND_ROBIN_TYPES,
  TOURNAMENT_TYPES,
  BRACKETS_TYPES,
} from "utils/constants";
import Select from "./Select";

const { roundRobin, brackets } = TOURNAMENT_TYPES;
const { switchPartners, fixedPartners } = ROUND_ROBIN_TYPES;
const { singleElimination, doubleElimination } = BRACKETS_TYPES;

const CreateTournament: React.FC = () => {
  const [tournamentTypeSelected, setTournamentTypeSelected] = useState<
    string | null
  >(null);
  const [tournamentSubtypeSelected, setTournamentSubtypeSelected] = useState<
    string | null
  >(null);

  return (
    <FormControl id="tournamentType" mt={10}>
      <Flex w="100%" flexDirection="row">
        <FormLabel width="100%">I'm creating a super tournament... </FormLabel>
        <Flex width="100%" flexDirection="column">
          {Select([roundRobin, brackets], setTournamentTypeSelected)}

          {tournamentTypeSelected &&
            isTypeRoundRobin(tournamentTypeSelected) &&
            Select(
              [switchPartners, fixedPartners],
              setTournamentSubtypeSelected
            )}

          {tournamentTypeSelected &&
            isTypeBrackets(tournamentTypeSelected) &&
            Select(
              [singleElimination, doubleElimination],
              setTournamentSubtypeSelected
            )}
          {
            <Button
              isDisabled={
                !(tournamentTypeSelected && tournamentSubtypeSelected)
              }
              leftIcon={<CgGames />}
              colorScheme="pink"
              variant="solid"
              isFullWidth
            >
              Create tournament!
            </Button>
          }
        </Flex>
      </Flex>
    </FormControl>
  );
};

export default CreateTournament;

function isTypeRoundRobin(tournamentType: string) {
  return tournamentType === roundRobin.value;
}

function isTypeBrackets(tournamentType: string) {
  return !isTypeRoundRobin(tournamentType);
}
