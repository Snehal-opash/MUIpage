import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from '@chakra-ui/react'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="orange"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent id="navbar">
          <DrawerCloseButton />
          <DrawerHeader>
            {' '}
            <a href="#">
              LassLess <b>VPN </b>
            </a>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'} >

              <Button
                // onClick={onClose}
                variant={'ghost'}
                colorScheme={'orange'}
                href="#about"
                as={Link}
                target={"_self"}
              > 
                About
              </Button>

              <Button
                variant={'ghost'}
                colorScheme={'orange'}
                href="#features"
                as={Link}
                target={"_self"}
                textDecor={'none'}
              >
                Features
              </Button>

              <Button
                variant={'ghost'}
                colorScheme={'orange'}
                href="#pricing"
                as={Link}
                target={"_self"}
              >
               Pricing
              </Button>

              <Button
                variant={'ghost'}
                colorScheme={'orange'}
                href="#testimonials"
                as={Link}
                target={"_self"}
              >
                Testimonials
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'orange'}
                href="#help"
                as={Link}
                target={"_self"}
              >
               Help
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'orange'}>
                <a href="/login">Log In</a>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'orange'}
                variant={'outline'}
              >
                <a href="/signup">Sign Up</a>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
