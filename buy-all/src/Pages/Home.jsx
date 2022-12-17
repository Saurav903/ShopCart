import React from 'react'
import {Box,SimpleGrid,Text,Button,Image,Link,Heading,useColorModeValue} from "@chakra-ui/react";
import {Link as LinkRoutes} from "react-router-dom";
import CustomArrows from './Crousel';
import Footer from './Footer';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
function Home() {
    const {setcategoryGet} = useContext(AuthContext);
    const shopDetailData = 
    [
        {img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_6502179-MMT-569003-0808-ec85fc42-4049-476f-ad8a-ad9e94e5607b.jpg;maxWidth=220",text: "Laptops & Computers",category:"Laptops"},
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502215_sd.jpg;maxWidth=220",text:"TVs & Projectors",category:"TV"},
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-apple-d28633c9-bbe5-4f83-a0f6-55b738306ae1.jpg;maxWidth=220",text:"Apple",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456332_sd.jpg;maxWidth=220",text:"Video Games",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519950_sd.jpg;maxWidth=220",text:"Cell Phones",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-606895-ghp-img-icons-mappls-2157cc1d-a86a-48d0-98a3-15110ca655c7.jpg;maxWidth=220",text:"Major Appliances",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505727_sd.jpg;maxWidth=220",text:"Headphones",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500695_rd.jpg;maxWidth=220",text:"PC Gaming",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-623320-ghp-img-icons-tablets-309e6e1b-379c-438d-b57c-7e6450a91e6e.jpg;maxWidth=220",text:"Tablets & E-Readers",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6213/6213100_sd.jpg;maxWidth=220",text:"Cameras",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454256_sd.jpg;maxWidth=220",text:"Sound Bars",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510885_sd.jpg;maxWidth=220",text:"Wearable Technology",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-smappls-bfa220bd-fca3-447c-ab2e-3c88aaebea36.jpg;maxWidth=220",text:"Small Appliances",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-602732-ghp-img-icons-printers-4bdae295-d0ae-45df-a950-a2411f6c1637.jpg;maxWidth=220",text:"Printers, Home",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461319_sd.jpg;maxWidth=220",text:"Smart Home, Security",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-toys-dbd5f58e-beb9-4ca2-8d48-3db5e29c5e63.jpg;maxWidth=220",text:"Toys, Games",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502458_sd.jpg;maxWidth=220",text:"Electric Transportation",category:"TV"},  
        {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-health-1c7229b6-26c8-44a1-94ea-62315c8c6a4b.jpg;maxWidth=220",text:"Health, Fitness",category:"TV"},                             
    ]
  return (
    <>  <hr />
        <Box bg={useColorModeValue('blue', 'blue.400')} w='100%'  color='white' mt={122}>
            <SimpleGrid columns={{sm: 1, lg: 2}} spacing={5} >
                <Box  height='280px' display="grid" justifyContent="center" alignItems="center">
                        <Text fontSize="80" fontWeight="900">
                            Great Deals.
                        </Text>
                        <Text fontSize="40" fontWeight="500" color="yellow">
                            All in one place.
                        </Text>
                </Box>
                <Box  height='280px' pt={8} display="grid" justifyContent="center" alignItems="center">
                        <Text fontSize="40" fontWeight="500">Find new deals all season long.</Text>
                        <Text textAlign="center">Limited quantities. No rainchecks. <Link to="/about">See Holiday FAQs</Link></Text>
                        <Box display="flex" justifyContent="center" alignItems="center"><Button bg="yellow" color="black">Shop Now</Button></Box>
                        
                </Box>
            </SimpleGrid>
            <br />
            <Text textAlign="center">Shop deals by category</Text>
            <br />
            <SimpleGrid columns={{sm: 1, lg: 6, "2xl": 6}} >
                {shopDetailData.map((e)=>(
                    <Box width="100%" h="250px" display="grid" justifyContent="center" alignItems="center">
                        <LinkRoutes to="/products"><Box onClick={()=>setcategoryGet(e.category)} bg="white" height="150px" width="150px" borderRadius="50%" border="3px solid #598bf7" display="grid" justifyContent="center" alignItems="center">
                                <Image src={e.img} w="70px"></Image>
                        </Box>
                        <br />
                        <Link color="yellow" fontWeight="500" fontSize="12px" width="100%" display="flex" justifyContent="center" alignItems="center">{e.text}</Link></LinkRoutes>
                    </Box>
                ))}
                
            </SimpleGrid>
        </Box>
        <SimpleGrid>
            <Heading textDecoration="underline">New arrivals</Heading>
            <hr style={{color:"gray"}}/>
            <Link><SimpleGrid columns={{sm: 1, lg: 4}} spacing={5} mt="20px">
                <Box w="100%" border="1px solid gray" display="grid" justifyContent="center" alignItems="center">
                    <Image w="100%" h="100px" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522220_rd.jpg;maxHeight=400;maxWidth=400"></Image>
                    <Text textAlign="center">Meta -Quest2</Text>
                </Box>
                <Box w="100%" border="1px solid gray" display="grid" justifyContent="center" alignItems="center">
                    <Image w="100%" h="100px" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6526/6526637_sd.jpg;maxHeight=400;maxWidth=400"></Image>
                    <Text textAlign="center">Flash Furniture</Text>
                </Box>
                <Box w="100%" border="1px solid gray" display="grid" justifyContent="center" alignItems="center">
                    <Image w="100%" h="100px" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6513/6513520_sd.jpg;maxHeight=400;maxWidth=400"></Image>
                    <Text textAlign="center">Microsoft Xbox</Text>
                </Box>
                <Box w="100%" border="1px solid gray" display="grid" justifyContent="center" alignItems="center">
                    <Image w="100%" h="150px" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6527/6527662_rd.jpg;maxHeight=400;maxWidth=400"></Image>
                    <Text textAlign="center">Honey-can-do</Text>
                </Box>
            </SimpleGrid></Link>
        </SimpleGrid>
        <Box bg='#0a10ac' w='100%'  color='white'>
            <SimpleGrid columns={{sm: 1, lg: 2}} spacing={10} mt="40px" padding="30px">
                        <Box>
                            <Text>Make holiday shopping a breeze with Best Buy Totaltech™.</Text>
                            <Text>Totaltech members enjoy exclusive access to great deals all holiday season long. They also get free shipping, free standard installation, product protection, 24/7 tech support and so much more.</Text>
                        </Box>
                        <Box>
                            <Button color="black" bg="yellow">Learn More</Button>
                            <Text>Exclusions, terms and conditions apply.</Text>
                        </Box>
            </SimpleGrid>
        </Box>
        <Box w="90%" margin="auto" mt="50px"><CustomArrows/></Box>
        <Box bg='#0a10ac' w='100%'  color='white'>
            <SimpleGrid columns={{sm: 1, lg: 2}} spacing={10} mt="40px" padding="30px">
                        <Box>
                            <Text fontSize="40px">Get gifts <span style={{color:"yellow"}}>fast </span>— as soon as today.</Text>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Button color="blue" bg="white">Shop Now</Button>
                        </Box>
            </SimpleGrid>
        </Box>
        <Box>
            <Footer/>
        </Box>
    </>
  )
}

export default Home