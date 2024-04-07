import { useEffect } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { useStore } from '@src/stores/user-store';
import { useLogin } from './useLogin';

export const LoginPage = observer(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { fetchUser } = useLogin();

  const { currentUser } = useStore;

  useEffect(() => {
    console.log('Login Page Mounted', isOpen);
  }, [isOpen]);

  const handleSignIn = () => {
    // Sign in logic
  };
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button onClick={() => fetchUser(1)}>Fetch User</Button>
      <div>{currentUser?.name}</div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button onClick={handleSignIn}>Sign In</Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
