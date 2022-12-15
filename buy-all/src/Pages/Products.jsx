import React from 'react';
import {Box,Divider,Breadcrumb,BreadcrumbItem,BreadcrumbLink} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {Link as RouteLink} from "react-router-dom";
function Products() {
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
        <Box display="flex" h="500px">
            <Box flex="2" border="1px solid black"></Box>
            <Box flex="8" border="1px solid black"></Box>
        </Box>
    </Box>
    
    </>
  )
}

export default Products