import {Box, chakra, useColorModeValue} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";
import {IoChevronUpOutline} from "react-icons/io5";

const BoxScrollTop = chakra(Box, {
    baseStyle: props => ({
        position: 'fixed',
        bottom: 4,
        right: 4,
        cursor: 'pointer',
        rounded: "full",
        p: '4',
        fontSize: '2xl',
        transition: "all 0.3s ease",
        '&:hover svg': {
            position: 'relative',

            top: '-5px', transition: "all 0.3s ease"
        }
    })
})
export default function ButtonScrollTop() {
    return <BoxScrollTop backgroundColor={useColorModeValue("rgba(0,0,0,0.5)", "rgba(255,255,255,0.5)")} onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }}>
        <IoChevronUpOutline color={useColorModeValue("white","black")}/>
    </BoxScrollTop>
}
