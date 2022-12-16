import React from 'react';
import axios from "axios";
import {Box,Divider,Breadcrumb,BreadcrumbItem,BreadcrumbLink,Text,Link,Slider,SliderMark,SliderTrack,SliderFilledTrack,Tooltip,SliderThumb,Checkbox,useColorModeValue,Select,SimpleGrid,Image,Button, Heading,Skeleton} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {Link as RouteLink} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import "./Products.css"
import Pagination from './Pagination';
function Products() {
  const {categoryGet,setcategoryGet} = useContext(AuthContext);
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  const [data,setData] = React.useState([]);
  const [isLoading,setIsLoading] = React.useState(true);
  const [page, setpage] = React.useState(1);
  const [sorts,setSorts] = React.useState("");
  const hi = categoryGet;
  const handleData = (hi,page,sorts)=>{
    if(hi && !sorts){
      return axios.get(`https://server-cp.onrender.com/addData?category=${hi}&_limit=6&_page=${page}`).then((res)=>{setData(res.data);setIsLoading(false)}).catch((err)=>console.log(err))
    } else if(sorts && hi){
      if(sorts==="h1"){
        return axios.get(`https://server-cp.onrender.com/addData?category=${hi}&_limit=6&_page=${page}&_sort=price&_order=desc`).then((res)=>{setData(res.data);setIsLoading(false)}).catch((err)=>console.log(err))
      }else if(sorts==="l1"){
        return axios.get(`https://server-cp.onrender.com/addData?category=${hi}&_limit=6&_page=${page}&_sort=price&_order=asc`).then((res)=>{setData(res.data);setIsLoading(false)}).catch((err)=>console.log(err))
      }
    } else if(sorts && !hi){
      if(sorts==="h1"){
        return axios.get(`https://server-cp.onrender.com/addData?_limit=6&_page=${page}&_sort=price&_order=desc`).then((res)=>{setData(res.data);setIsLoading(false)}).catch((err)=>console.log(err))
      }else if(sorts==="l1"){
        return axios.get(`https://server-cp.onrender.com/addData?_limit=6&_page=${page}&_sort=price&_order=asc`).then((res)=>{setData(res.data);setIsLoading(false)}).catch((err)=>console.log(err))
      }
    }
     else {
      return axios.get(`https://server-cp.onrender.com/addData?_limit=6&_page=${page}`).then((res)=>{setData(res.data);setIsLoading(false)}).catch((err)=>console.log(err))
    }
    
  }
  
  React.useEffect(()=>{
      handleData(hi,page,sorts);
  },[hi,page,sorts])
  console.log(sorts);
  return (
    <>
    <Box>
        <Divider paddingTop={150}/>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'><RouteLink to="/">Home</RouteLink></BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Category</BreadcrumbLink>
                </BreadcrumbItem>
        </Breadcrumb>
        <Divider />
        <Box display="flex" paddingTop="10px">
            <Box flex="2" h="532px" display="grid" overflowY="scroll" rowGap="-100px" boxShadow='2xl' gap="3" bg={useColorModeValue('gray.100', 'black.400')}  border="1px solid gray" padding="10px">
              <p className='first'>Category
              <Divider />
                <Box  paddingLeft="30px" display="grid" color="blue">
                  <Link onClick={()=>setcategoryGet("Laptops")}>Laptops</Link>
                  <Link onClick={()=>setcategoryGet("TV")}>TV</Link>
                  <Link>Camera</Link>
                  <Link>Video Games</Link>
                  <Link>Fitness</Link>
                  <Link>Mobiles</Link>
                </Box>
              </p>
              <p className='first' paddingtop="30px">Price
              <Divider />
                <Box paddingLeft="30px" display="grid" color="blue">
                      <Slider
                        id='slider'
                        defaultValue={5}
                        min={0}
                        max={100}
                        colorScheme='teal'
                        onChange={(v) => setSliderValue(v)}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                      >
                        <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
                          2500
                        </SliderMark>
                        <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                          5000
                        </SliderMark>
                        <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                          7500
                        </SliderMark>
                        <SliderTrack>
                          <SliderFilledTrack />
                        </SliderTrack>
                        <Tooltip
                          hasArrow
                          bg='teal.500'
                          color='white'
                          placement='top'
                          isOpen={showTooltip}
                          label={`${sliderValue}%`}
                        >
                          <SliderThumb />
                        </Tooltip>
                      </Slider>
                </Box>
              </p>
              <p className='first' paddingtop="30px">Brand
              <Divider />
                <Box display="grid" w="80%" paddingTop="20px" gap="3" margin="auto">
                  <Link display="flex" justifyContent="space-between"><Checkbox colorScheme='green' borderColor="gray"/> <Text>Hp</Text></Link>
                  <Link display="flex" justifyContent="space-between"><Checkbox colorScheme='green' borderColor="gray"/> <Text>Microsoft</Text></Link>
                  <Link display="flex" justifyContent="space-between"><Checkbox colorScheme='green' borderColor="gray"/> <Text>Apple</Text></Link>
                  <Link display="flex" justifyContent="space-between"><Checkbox colorScheme='green' borderColor="gray"/> <Text>Usha</Text></Link>
                  <Link display="flex" justifyContent="space-between"><Checkbox colorScheme='green' borderColor="gray"/> <Text>Infotech</Text></Link>
                </Box>
              </p>
              <p className='first'>Color
              <Divider />
                <Box display="grid" w="80%" paddingTop="20px" gap="3" margin="auto">
                  <Link display="flex" justifyContent="space-between"><Checkbox colorScheme='green' borderColor="gray"/> <Text>Red</Text></Link>
                  <Link display="flex" justifyContent="space-between"><Checkbox colorScheme='green' borderColor="gray"/> <Text>Green</Text></Link>
                  <Link display="flex" justifyContent="space-between"><Checkbox colorScheme='green'borderColor="gray"/> <Text>Gray</Text></Link>
                  <Link display="flex" justifyContent="space-between"><Checkbox colorScheme='green' borderColor="gray"/> <Text>White</Text></Link>
                  <Link display="flex" justifyContent="space-between"><Checkbox colorScheme='green' borderColor="gray"/> <Text>Pink</Text></Link>
                </Box>
              </p>
            </Box>
            <Box flex="8"  h="500px">
              <Box>
                Sort by:
              <Select variant='outline' placeholder='Featured' onChange={(e)=>setSorts(e.target.value)}>
                  <option value='h1'>High to Low</option>
                  <option value='l1'>Low to High</option>
                  <option value='option3'>A-Z</option>
              </Select>
              </Box>
              {isLoading && <Box display="grid" gap={5}><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/><Skeleton height='50px' w="90%" margin="auto"/></Box>}
              {<Box >
                  <SimpleGrid columns={{sm:1,lg:3}} spacing="30px" padding="20px">
                    {data.map((e)=>(
                          <Box className='databox' key={e.id} w="100%" display="grid" justifyContent="center" alignItems="center">
                          <Image src ={e.img} w="100%"/>
                          <Text textAlign="center" fontSize="18px">{e.name}</Text>
                          <Heading textAlign="center" fontWeight="500">${e.price}</Heading>
                          <RouteLink to={`/products/${e.id}`}><Box display="flex" justifyContent="center" alignItems="center" mt={5}><Button className='buttonh' bg="blue" color="white">Buy Now</Button></Box></RouteLink>
                        </Box>
                    ))}
                      
                  </SimpleGrid> 
              </Box>}
              <Pagination current={page}
          onChange={(page) => setpage(page)} total={Math.ceil(18/6)}/>
            </Box>
        </Box>
    </Box>
    
    </>
  )
}

export default Products