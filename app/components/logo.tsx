import {useColorModeValue, Text, Box, Image} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {NavLink} from "@remix-run/react";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`
export default function Logo() {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return (<NavLink to="/">
        <LogoBox>
            <Box display={"flex"} alignItems={"center"}>

                <Image src={footPrintImg} width={"20px"} height={"20px"} alt="logo"/>
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontWeight="bold"
                    ml={3}
                >
                    Van Nguyen
                </Text>
            </Box>
        </LogoBox>
    </NavLink>)
}
