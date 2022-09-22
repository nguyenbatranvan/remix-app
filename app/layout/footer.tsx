import {Box, Container, Flex, Heading, useColorModeValue} from "@chakra-ui/react";

export default function Footer() {
    return <Box align="center" opacity={0.4} marginY={4} fontSize="sm">
        &copy; {new Date().getFullYear()} Nguyen Ba Tran Van. All Rights Reserved.
    </Box>
}
