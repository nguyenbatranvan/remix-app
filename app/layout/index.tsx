import {Box} from "@chakra-ui/react";
import Footer from "~/layout/footer";
import Navbar from "~/layout/navbar";

export default function Layout({children}) {
    return <Box>
        <Navbar/>
        {children}
    </Box>
}
