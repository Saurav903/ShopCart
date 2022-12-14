import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,Button,Image,Box,Text,Input,useColorMode,SimpleGrid
  } from '@chakra-ui/react'
  import {HamburgerIcon,ChevronDownIcon} from "@chakra-ui/icons"
  import {Link} from "react-router-dom";
  import { BsFillCartCheckFill,BsSearch } from 'react-icons/bs';
  import {MdDarkMode} from "react-icons/md";
  import {CiLight} from "react-icons/ci";
    import React from 'react'

 const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
    <div style={{width:"100%", height:"80px", backgroundColor:"#0a10ac",display:"flex",justifyContent:"space-between"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"15%"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"auto"}}>
                <Image width="100%"
                boxSize='65px'
                objectFit='cover'
                src='data:image/jpeg;base64,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'
                alt='Dan Abramov'
                ></Image>
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                        <Menu>
                        <MenuButton as={Button} leftIcon={<HamburgerIcon fontSize='30px'/>}  backgroundColor='#0a10ac' color="white"  fontSize='20px' >
                            <Text>Menu</Text>
                        </MenuButton>
                        <MenuList>
                            <MenuItem minH='48px'command='>'>
                            <Box ><Link to="/deal" style={{textDecorationLine:"none", color:"blue", fontWeight:"900"}}>Deal</Link></Box>
                            </MenuItem>
                            <MenuItem minH='48px' command='>'>
                            <Box><Link to="/deal" style={{textDecorationLine:"none", color:"blue", fontWeight:"900"}}>Support and Services</Link></Box>
                            </MenuItem>
                            <MenuItem minH='48px' command='>'>
                            <Box><Link to="/deal" style={{textDecorationLine:"none", color:"blue", fontWeight:"900"}}>Brands</Link></Box>
                            </MenuItem>
                            <MenuItem minH='48px' command='>'>
                            <Box><Link to="/deal" style={{textDecorationLine:"none", color:"blue", fontWeight:"900"}}>Featured</Link></Box>
                            </MenuItem>
                        </MenuList>
                        </Menu>
                </div>
                
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"auto",height:"30px",width:"30%"}}>
        <Input htmlSize={38} width='auto'  placeholder='Search'/>
            <Button  colorScheme='teal' variant='outline'><BsSearch/></Button>
        </div>
        <div style={{width:"30%",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
            <button style={{backgroundColor:"#0a10ac",border:"none",color:"white",cursor:"pointer",display:"flex",alignItems:"center"}}><BsFillCartCheckFill fontSize={30}/><Text color="white" fontWeight="800" fontSize="20">Cart</Text></button>
            <Button colorScheme='blue'>Login/SignUp</Button>
            <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MdDarkMode/> : <CiLight/>}
            </Button>
        </div>
    </div>
            <hr />
        <Box bg='#0a10ac' w='100%' p={3} color='white'>
            <SimpleGrid columns={[1, 5, 9]} spacing={1}>
                <Box>
                    <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="white" backgroundColor="#0a10ac">
                                Holiday Deals
                            </MenuButton>
                            <MenuList >
                                <MenuItem color="blue">Download</MenuItem>
                                <MenuItem color="blue">Create a Copy</MenuItem>
                                <MenuItem color="blue">Mark as Draft</MenuItem>
                                <MenuItem color="blue">Delete</MenuItem>
                                <MenuItem color="blue">Attend a Workshop</MenuItem>
                            </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Button colorScheme='white' variant='link' marginTop="10px">
                        Top Deal
                    </Button>
                </Box>
                <Box>
                    <Button colorScheme='white' variant='link' marginTop="10px">
                        Deal of the day
                    </Button>
                </Box>
                <Box>
                    <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="white" backgroundColor="#0a10ac">
                                More
                            </MenuButton>
                            <MenuList>
                                <MenuItem color="blue">Download</MenuItem>
                                <MenuItem color="blue">Create a Copy</MenuItem>
                                <MenuItem color="blue">Mark as Draft</MenuItem>
                                <MenuItem color="blue">Delete</MenuItem>
                                <MenuItem color="blue">Attend a Workshop</MenuItem>
                            </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="white" backgroundColor="#0a10ac">
                                Recently Viewed
                            </MenuButton>
                            <MenuList>
                                <MenuItem color="blue">Download</MenuItem>
                                <MenuItem color="blue">Create a Copy</MenuItem>
                                <MenuItem color="blue">Mark as Draft</MenuItem>
                                <MenuItem color="blue">Delete</MenuItem>
                                <MenuItem color="blue">Attend a Workshop</MenuItem>
                            </MenuList>
                    </Menu>
                </Box>
                <Box></Box>
                <Box>
                    <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="white" backgroundColor="#0a10ac">
                                Order Status
                            </MenuButton>
                            <MenuList>
                                <MenuItem color="blue">Download</MenuItem>
                                <MenuItem color="blue">Create a Copy</MenuItem>
                                <MenuItem color="blue">Mark as Draft</MenuItem>
                                <MenuItem color="blue">Delete</MenuItem>
                                <MenuItem color="blue">Attend a Workshop</MenuItem>
                            </MenuList>
                    </Menu>
                </Box>
                <Box></Box>
                <Box>
                    <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="white" backgroundColor="#0a10ac">
                                Saved Item
                            </MenuButton>
                            <MenuList>
                                <MenuItem color="blue">Download</MenuItem>
                                <MenuItem color="blue">Create a Copy</MenuItem>
                                <MenuItem color="blue">Mark as Draft</MenuItem>
                                <MenuItem color="blue">Delete</MenuItem>
                                <MenuItem color="blue">Attend a Workshop</MenuItem>
                            </MenuList>
                    </Menu>
                </Box>
            </SimpleGrid>
        </Box>
    </div>
  );
}
export default Navbar;
