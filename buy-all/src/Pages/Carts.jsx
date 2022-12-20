import React from 'react'
import {Box,Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Button,Select,Skeleton,useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,FormControl,FormLabel,Input,Tabs,TabList,Tab,TabPanels,TabPanel,useToast,Breadcrumb,BreadcrumbItem,BreadcrumbLink} from "@chakra-ui/react";
import {SmallCloseIcon,ChevronRightIcon} from "@chakra-ui/icons";
import axios from 'axios';
import Footer from './Footer';
import { MdDeliveryDining } from "react-icons/md";
import {Link as RouteLink} from "react-router-dom";
function Carts() {
    const [cartData,setCartData] = React.useState([]);
    const [loadingButton,setloadingButton] = React.useState(false);
    const [isLoading,setIsLoading] = React.useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const emptyCart = (id)=>{
        
        axios.delete(`https://server-cp.onrender.com/cart/${id}`).then((res)=>setCartData([])).catch((err)=>console.log(err));
    }
    const handleCloseModal = (onClose)=>{
        setloadingButton(true);
        cartData.forEach((el)=>emptyCart(el.id))
        setTimeout(()=>{
            
            toast({
                title: 'Payment Successful.',
                description: "Your Order Placed.",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
            setloadingButton(false);
            return  onClose();
        },2000)
        
    }
    const handleData = ()=>{
        return axios.get(`https://server-cp.onrender.com/cart`).then((res)=>{setCartData(res.data);setIsLoading(false)}).catch((err)=>console.log(err));
        
    }
    React.useEffect(()=>{
        handleData();
    },[cartData]);
    
    const handleDelete = (id)=>{
        axios({
            baseURL:`https://server-cp.onrender.com/cart`,
            url: `/${id}`,
            method: "delete"
        });
        handleData();
    }
   
    // console.log(cartData);
    const x = cartData.reduce((total,el)=>{return total + el.price},0);
    // setAmount(x);
    let y = x.toFixed();
  return (
    <Box paddingTop={135} w="97%" margin="auto">
        <Box>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'><RouteLink to="/">Home</RouteLink></BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'><RouteLink to="/products">Category</RouteLink></BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'><RouteLink to="/products">Product details</RouteLink></BreadcrumbLink>
                </BreadcrumbItem>
        </Breadcrumb>
        </Box>
        <Box display="flex" h="auto">
            <Box flex="7">
            {isLoading && <Box display="grid" gap={5}><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/></Box>}
                {<Box>
                    {cartData?.map((e)=>(
                        <Card variant='outline' h="200px"  w="100%" key={e.id}>
                            <Box display="flex" w="100%" justifyContent="space-between" borderRadius="10px"   gap={30}>
                                    <Box h="200px" w="35%" display="grid" justifyContent="center" alignItems="center" >
                                        <Image w="70%" margin="auto" h="auto" src={e.img}/>
                                    </Box>
                                    <Box h="200px" w="35%" display="grid" justifyContent="center" alignItems="center">
                                        <Text>{e.name}</Text>
                                        <Text>${e.price}</Text>
                                        
                                        <Select placeholder='Quantity' onChange={(e)=>e.target.value}>
                                            <option value='option1'>1</option>
                                            <option value='option2'>2</option>
                                            <option value='option3'>3</option>
                                        </Select>
                                    </Box>
                                    <Box h="200px" w="35%" display="grid" justifyContent="center" alignItems="center">
                                        <Button onClick={()=>handleDelete(e.id)}><SmallCloseIcon/></Button>
                                    </Box>
                            </Box>
                        </Card>
                    ))}
                    
                </Box>}
                
            </Box>
            <Box flex="3" >
                <Box w="100%" h="auto" >
                <Card maxW='sm' w="100%">
                                <CardBody>
                                    <Heading textAlign="center">Product Amount</Heading>
                                    <Stack mt='6' spacing='6'>
                                    <Heading size='md'>Electronic Item</Heading>
                                    <Box display="flex" justifyContent="space-between">
                                    <Text>
                                        Subtotal  
                                    </Text>
                                    <Text fontWeight="500"><s>
                                        ${x+200 } </s>
                                    </Text>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                    <Text>
                                        Discount  
                                    </Text>
                                    <Text fontWeight="500">
                                        ${x+200 } - ${x}
                                    </Text>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                    <Text color='blue.600' fontSize='2xl'>
                                        Total Amount
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        ${y}
                                    </Text>
                                    </Box>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <Box display="grid" w="100%" justifyContent="center" alignItems="center">
                                    <ButtonGroup >
                                    <Button onClick={onOpen} variant='solid' color="white" bg="black" _hover={{backgroundColor:"white",color:"black"}} size="lg">
                                        CheckOut
                                    </Button>
                                        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                                            <ModalOverlay />
                                            <ModalContent>
                                            <ModalHeader>Address & Payment</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <FormControl>
                                                    <FormLabel>Name</FormLabel>
                                                    <Input type='text' placeholder='Full Name'/>
                                                    <FormLabel>Address</FormLabel>
                                                    <Input type='text' placeholder='Full Address'/>
                                                    <FormLabel>Postal Code</FormLabel>
                                                    <Input htmlSize={3} width='auto' type='number' placeholder='ZIP code'/>
                                                    <FormLabel>Contact</FormLabel>
                                                    <Input type='number' placeholder='Contact'/>
                                                    <Card>
                                                            <Text fontSize="30px" fontWeight="500">Payment Method</Text>
                                        
                                                            <Tabs>
                                                                <TabList>
                                                                    <Tab>Cash on Delivery</Tab>
                                                                    <Tab>UPI</Tab>
                                                                    <Tab>Online</Tab>
                                                                </TabList>

                                                                <TabPanels>
                                                                    <TabPanel>
                                                                    <p>Proceed cash on delivery! <MdDeliveryDining/></p>
                                                                    </TabPanel>
                                                                    <TabPanel>
                                                                    <Input type='number' placeholder='upi@id'/>
                                                                    <Button color="white" bg="green.300">Check</Button>
                                                                    </TabPanel>
                                                                    <TabPanel>
                                                                    <FormLabel>Card Number</FormLabel>
                                                                    <Input type='number' placeholder='Card Number'/>
                                                                    <FormLabel>expiry date</FormLabel>
                                                                    <Input htmlSize={3} type='number' placeholder='__/__'/>
                                                                    <Text textAlign="center" color="gray.500">OR</Text>
                                                                    <Input type='number' placeholder='Enter ETH Token'/>
                                                                    <Button color="white" bg="red.300">Check</Button>
                                                                    </TabPanel>
                                                                </TabPanels>
                                                                </Tabs>
                                                    </Card>
                                                </FormControl>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button variant='ghost'  mr={3} onClick={onClose}>
                                                Close
                                                </Button>
                                                <Button isLoading={loadingButton} onClick={()=>handleCloseModal(onClose)} colorScheme='blue'>Pay Now</Button>
                                            </ModalFooter>
                                            </ModalContent>
                                        </Modal>
                                    </ButtonGroup></Box>
                                </CardFooter>
                        </Card>
                </Box>
            </Box>
        </Box>
        <Box paddingTop="50px">
        <Footer/></Box>
    </Box>
  )
}

export default Carts