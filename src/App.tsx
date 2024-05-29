import { Box, Img, Link, Stack, Text } from '@chakra-ui/react';
import { Routes, Route, Outlet } from 'react-router-dom';

import fluxonLogo from './assets/fluxon-logo.svg';
import FirebaseDemo from './FirebaseDemo';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EventPage />} />
      <Route path="/firebase-demo" element={<FirebaseDemo />} />
    </Routes>
  );
};

const EventPage = () => {
  return (
    <>
      <Box h="full" bg="radial-gradient(at left top, #050311 20%, #2A53C7 100%)">
        <Stack spacing={4} justifyContent="center" alignItems="center" h="full">
          <Link target="_blank" href="https://fluxon.com">
            <Img w={300} src={fluxonLogo} />
          </Link>
          <Text color="white">UCU x Fluxon Product Development Bootcamp</Text>
        </Stack>
      </Box>
    </>
  );
};
