import {extendTheme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

export const customTheme = extendTheme({
    components: {
        Link: {
            baseStyle: props => ({
                color: mode('#3d7aed', '#ff63c3')(props),
                textUnderlineOffset: 3
            })
        },
        Heading: {
            defaultProps: {},
            variants: {
                title: {
                    fontSize: '4xl'
                },
                "title-under-line": props => ({
                    textDecoration: 'underline',
                    fontSize: 20,
                    textUnderlineOffset: 6,
                    textDecorationColor: '#525252',
                    textDecorationThickness: 4,
                    marginTop: 3,
                    marginBottom: 4
                })
            },
            baseStyle: props => ({
                lineHeight: 1.2,
                color: mode('blackAlpha.900', '#fff')(props),
                fontWeight: 700
            })
        }
    },
    fonts: {
        heading: 'Montserrat, sans-serif',
        body: 'Montserrat, sans-serif'
    },
    config,
    styles: {
        global: props => ({
            " .grid-item-thumbnail": {
                "border-radius": '12px'
            },
            'html,body': {
                bg: mode('#f0e7db', '#202023')(props),
                fontFamily: 'Montserrat, sans-serif'
            },
            h1: {
                fontSize: '3xl',
                fontWeight: '500'
            }
        })
    }
})
