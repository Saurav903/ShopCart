import React from 'react'
import { Box, SimpleGrid,Text,Link,Input,Button } from '@chakra-ui/react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import {Link as RouteLink} from "react-router-dom";
import { BsFacebook,BsTwitter,BsInstagram,BsPinterest,BsYoutube } from "react-icons/bs";
function Footer() {
    const deta = [
        {logo: <AiOutlineQuestionCircle/>,text:"Visit our Support Center"},
        {logo: <FiPackage/>,text:"check your order status"},
        {logo:<MdOutlineLocalShipping/>,text:"Shipping&Delivery"},
        {logo:<TbTruckReturn/>,text:"Return & Exchange"}
    ]
  return (
    <>
        <Box mt={50} mb={30}>
            <SimpleGrid columns={{sm: 1, lg: 4}} spacing={10}>
                {deta.map((e)=>(
                    <Box display="grid" justifyContent="center" alignItems="center">
                        <Box display="grid" justifyContent="center" alignItems="center" fontSize="50px">
                            {e.logo}
                        </Box>
                        <hr />
                        <Box>
                            <Link>{e.text}</Link>
                        </Box>
                    </Box>
                ))}
                
            </SimpleGrid>
        </Box>
        <Box width="90%" margin="auto" mt={50}>
            <SimpleGrid columns={{sm: 1, lg: 2}} >
                <Box w="100%">
                    <SimpleGrid columns={{sm: 1, lg: 3}} spacing={10}>
                        <Box display="grid">
                            <Text fontWeight="500">Order & Purchases</Text>
                            <Link>Check Order Status</Link>
                            <Link>Shipping, Delivery & Pickup</Link>
                            <Link>Returns & Exchanges</Link>
                            <Link>Price Match Guarantee</Link>
                            <Link>Product Recalls</Link>
                            <Link>Trade-In Program</Link>
                        </Box>
                        <Box display="grid">
                            <Text fontWeight="500">Support & Services</Text>
                            <Link>Visit our Support Center</Link>
                            <Link>Shop with an Expert</Link>
                            <Link>Schedule a Service</Link>
                            <Link>Price Match Guarantee</Link>
                            <Link>Protection & Support Plans</Link>
                            <Link>Contact Us</Link>
                        </Box>
                        <Box display="grid">
                            <Text fontWeight="500">Partnerships</Text>
                            <Link>Affiliate Program</Link>
                            <Link>Advertise with Us</Link>
                            <Link>Developers</Link>
                            <Link>Best Buy Health</Link>
                            <Link>Best Buy Education</Link>
                            <Link>Contact Us</Link>
                        </Box>
                        <Box display="grid">
                            <Text fontWeight="500">Payment Options</Text>
                            <Link>My Best Buy® Credit Card</Link>
                            <Link>Advertise with Us</Link>
                            <Link>Developers</Link>
                            <Link>Best Buy Health</Link>
                            <Link>Best Buy Education</Link>
                            <Link>Lease to Own</Link>
                        </Box>
                        <Box display="grid">
                            <Text fontWeight="500">Rewards & Membership</Text>
                            <Link>My Best Buy® Credit Card</Link>
                            <Link>Advertise with Us</Link>
                            <Link>Developers</Link>
                            <Link>Best Buy Health</Link>
                            <Link>Best Buy Education</Link>
                            <Link>Member Offers</Link>
                        </Box>
                        <Box display="grid">
                            <Text fontWeight="500">About Best Buy</Text>
                            <Link>My Best Buy® Credit Card</Link>
                            <Link>Advertise with Us</Link>
                            <Link>Developers</Link>
                            <Link>Best Buy Health</Link>
                            <Link>Best Buy Education</Link>
                            <Link>Discover & Learn</Link>
                        </Box>
                    </SimpleGrid>
                </Box>
                <Box w="80%" margin="auto"  boxShadow='md' h="450px">
                        <Box display="grid" gap={3} justifyContent="center" alignItems="center" >
                            <Box>
                                <RouteLink to="/login">Sign in or Create account</RouteLink>
                            </Box>
                            <Box>
                                <Text>Get the latest deals and more.</Text>
                                <Input placeholder='email'/> 
                                <RouteLink to="/login"><Button bg="blue" color="white">SignUp</Button></RouteLink>
                            </Box>
                            <Box>
                                <Text>BestBuy App</Text>
                                <RouteLink to="/about">Learn More</RouteLink>
                            </Box>
                            <Box display="flex" justifyContent="space-around">
                                <BsFacebook/>
                                <BsTwitter/>
                                <BsInstagram/>
                                <BsPinterest/>
                                <BsYoutube/>
                            </Box>
                            <Box><RouteLink to="/about">Forum Blog and More</RouteLink></Box>
                        </Box>
                </Box>
            </SimpleGrid>
        </Box>
    </>
  )
}

export default Footer