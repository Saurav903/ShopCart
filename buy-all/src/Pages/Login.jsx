import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,Checkbox,Tabs,TabList,Tab,TabPanels,TabPanel,useToast
  } from '@chakra-ui/react';
  import { useState, useEffect,useContext } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import axios from "axios";
  import { AuthContext } from '../Context/AuthContextProvider';
  import {useNavigate} from "react-router-dom";

  export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [signUpEmail,setSignUpEmail] = useState("");
    const [signUpPassword,setSignUpPassword] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [loginEmail,setLoginEmail]= useState("");
    const [loginPassword,setLoginPassword] = useState("");
    const {setIsAuth,isAuth} = useContext(AuthContext);
    const [users,setUsers] = useState("");
    const navigate = useNavigate();
    const toast = useToast();
    const getData = () =>{
      return axios.get(`https://server-cp.onrender.com/accounts`).then((res)=>setUsers(res.data)).catch((err)=>console.log(err));
    }
  
  
    const userSignUp = (signUpEmail,signUpPassword)=>{
      const user = {
        "id": Date.now() + signUpPassword,
        "email":signUpEmail,
        "password":signUpPassword
      }
      axios.post(`https://server-cp.onrender.com/accounts`,user);
      setSignUpEmail("");
      setSignUpPassword("");
      setLastName("");
      setFirstName("");
      getData();
      toast({
        title: 'SignUp Successfully',
        description: "Login Now",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    }
    useEffect(()=>{
      getData();
    },[])
    
    const handleLoginData = (loginEmail,loginPassword,users)=>{
        if(loginPassword.length <= 4){
          return alert("Password must be greater then 5");
        }
        for(let i=0; i<users.length; i++){
          if(users[i].email === loginEmail && users[i].password === loginPassword){
            setIsAuth(true);
            toast({
              title: 'Login Successfully',
              description: "",
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
            break;
          }
        }
        
    }
    if(isAuth){
      navigate("/");
    }
    console.log(users);
    return (
        <>
        <Tabs variant='soft-rounded' colorScheme='green' paddingTop="150px" bg={useColorModeValue('blue', 'blue.400')}>
          <TabList>
            <Tab color="white">SignUp</Tab>
            <Tab color="white">Login</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
            <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('blue', 'blue.400')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} color="white">
              Sign up
            </Heading>
            <Text fontSize={'lg'} color="white">
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=>setSignUpEmail(e.target.value)} type="email" value={signUpEmail} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={(e)=>setSignUpPassword(e.target.value)} type={showPassword ? 'text' : 'password'} value={signUpPassword} required minlength="4" maxlength="9"/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={()=>userSignUp(signUpEmail,signUpPassword)}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'} >
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
            </TabPanel>
            <TabPanel>
            <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('blue', 'blue.400')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color="white">Sign in to your account</Heading>
          <Text fontSize={'lg'} color="white">
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)} type="password" required minlength="4" maxlength="9"/>
            </FormControl>
            <Stack  spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={()=>handleLoginData(loginEmail,loginPassword,users)}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      
      
      </>
    );
  }