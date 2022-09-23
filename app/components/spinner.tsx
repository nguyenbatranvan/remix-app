import {Box, Spinner, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";

const BoxSpinner = styled(Box)`
 position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) `

function CustomSpinner() {
    return <Box position={"absolute"} className={"spinner"} minWidth={"100vw"} top={0} zIndex={2}
                backgroundColor={useColorModeValue("rgba(0,0,0,0.5)", "rgba(255,255,255,0.5)")} bottom={0}
                minHeight={"100vh"}>
        <BoxSpinner>
            <Spinner size='lg' color='white'/>
        </BoxSpinner>
    </Box>
}

export default CustomSpinner;
