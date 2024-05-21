import { Box, Img, Link, Stack, Text } from '@chakra-ui/react';

import fluxonLogo from './assets/fluxon-logo.svg';

export const App = () => {
  return (
    <Box h="full" bg="radial-gradient(at left top, #050311 20%, #2A53C7 100%)">
      <Stack spacing={4} justifyContent="center" alignItems="center" h="full">
        <Link target="_blank" href="https://fluxon.com">
          <Img w={300} src={fluxonLogo} />
        </Link>
        <Text color="white">UCU x Fluxon Product Development Bootcamp</Text>
      </Stack>
    </Box>
  );
};
