import {Box} from "@chakra-ui/react";
import React from "react";
import Footer from "~/layout/footer";
import Navbar from "~/layout/navbar";

export default function Layout({children}) {
    return <Box>
        <Navbar/>
        {children}
        <Footer/>
    </Box>
}
