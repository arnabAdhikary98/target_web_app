import { Box, Container, Stack, SimpleGrid, Text, Link, useColorModeValue, Flex, Heading, Divider, Icon, HStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const socialIconColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box
      bg={bgColor}
      color={textColor}
      mt={10}
      py={{ base: 8, md: 10 }}
    >
      <Container as={Stack} maxW={'container.xl'} px={{ base: 4, md: 6 }}>
        <SimpleGrid 
          columns={{ base: 2, sm: 2, md: 4 }} 
          spacing={{ base: 6, md: 8 }}
          fontSize={{ base: "sm", md: "md" }}
        >
          <Stack align={'flex-start'} spacing={{ base: 3, md: 4 }}>
            <Text fontWeight={'600'} fontSize={{ base: "md", md: "lg" }} mb={{ base: 1, md: 2 }}>Company</Text>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Store Locations</Link>
          </Stack>

          <Stack align={'flex-start'} spacing={{ base: 3, md: 4 }}>
            <Text fontWeight={'600'} fontSize={{ base: "md", md: "lg" }} mb={{ base: 1, md: 2 }}>Support</Text>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Returns Policy</Link>
            <Link href={'#'}>Shipping Info</Link>
            <Link href={'#'}>Order Tracking</Link>
          </Stack>

          <Stack align={'flex-start'} spacing={{ base: 3, md: 4 }}>
            <Text fontWeight={'600'} fontSize={{ base: "md", md: "lg" }} mb={{ base: 1, md: 2 }}>Legal</Text>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Cookie Policy</Link>
            <Link href={'#'}>Accessibility</Link>
          </Stack>

          <Stack align={'flex-start'} spacing={{ base: 3, md: 4 }}>
            <Text fontWeight={'600'} fontSize={{ base: "md", md: "lg" }} mb={{ base: 1, md: 2 }}>Connect</Text>
            <Link href={'#'}>Email Sign Up</Link>
            <Link href={'#'}>Target App</Link>
            <Link href={'#'}>Target Circle</Link>
            <Link href={'#'}>Gift Cards</Link>
          </Stack>
        </SimpleGrid>

        <Divider my={{ base: 6, md: 8 }} borderColor={borderColor} />

        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align={{ base: 'center', md: 'center' }}
          gap={{ base: 4, md: 0 }}
        >
          <Text fontSize={{ base: "sm", md: "md" }}>© 2023 Target. All rights reserved</Text>
          
          <HStack spacing={{ base: 3, md: 5 }}>
            <Icon as={FaFacebook} boxSize={{ base: 5, md: 6 }} color={socialIconColor} cursor="pointer" />
            <Icon as={FaTwitter} boxSize={{ base: 5, md: 6 }} color={socialIconColor} cursor="pointer" />
            <Icon as={FaInstagram} boxSize={{ base: 5, md: 6 }} color={socialIconColor} cursor="pointer" />
            <Icon as={FaPinterest} boxSize={{ base: 5, md: 6 }} color={socialIconColor} cursor="pointer" />
            <Icon as={FaYoutube} boxSize={{ base: 5, md: 6 }} color={socialIconColor} cursor="pointer" />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
