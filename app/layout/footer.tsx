import {Box} from "@chakra-ui/react";
import styled from "@emotion/styled";
const BoxFooter = styled(Box)`
  position: absolute;
    left: 50%;
    bottom:0;
    margin-right: -50%;
    transform: translate(-50%, -50%) 
`
export default function Footer() {
    return <BoxFooter align="center" opacity={0.4} marginY={4} fontSize="sm">
        &copy; {new Date().getFullYear()} Nguyen Ba Tran Van. All Rights Reserved.
    </BoxFooter>
}
