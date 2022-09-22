import {ComponentStyleConfig} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export const CustomHeading: ComponentStyleConfig = {
    defaultProps: {
    },
    variants: {
        title: {
            fontSize: '4xl'
        },
        "title-under-line": props => ({
            textDecoration: 'underline',
            fontSize: 20,
            textUnderlineOffset: 6,
            textDecorationColor: mode('#525252', "#fff"),
            textDecorationThickness: 4,
            marginTop: 3,
            marginBottom: 4
        })
    },
    baseStyle: {
        lineHeight: 1.2,
        color: mode('blackAlpha.900','#fff'),
        fontWeight: 700
    }
}
