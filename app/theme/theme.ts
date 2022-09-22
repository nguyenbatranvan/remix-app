import {extendTheme} from "@chakra-ui/react";

export const customTheme= extendTheme({
    fonts: {
        heading: 'Montserrat, sans-serif',
        body: 'Montserrat, sans-serif'
    },
    styles: {
        global: {
            'html,body': {
                fontFamily: 'Montserrat, sans-serif'
            }
        }
    }
})
