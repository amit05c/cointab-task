import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

function ModalComp({handleDelete}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const deleteFunc= ()=>{
       handleDelete()
       onClose()
    }
    return (
      <>
        <Button  colorScheme={"red"} onClick={onOpen}>Delete Users</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Want to Delete?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={deleteFunc}>
                Delete
              </Button>
              {/* <Button colorScheme={"red"}>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalComp