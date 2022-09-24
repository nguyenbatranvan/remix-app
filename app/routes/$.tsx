import {Box, Button, Divider, Heading, Text} from "@chakra-ui/react";
import {NavLink} from "@remix-run/react";

export default function PageNotFound() {
    return <><Heading as="h1">Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6}/>
        <Box my={6} align="center">
            <NavLink to="/">
                <Button colorScheme="teal">Return to home</Button>
            </NavLink>
        </Box></>;
}
