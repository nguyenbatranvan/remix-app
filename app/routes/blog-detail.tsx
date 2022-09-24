import {Box, Divider, useColorModeValue} from "@chakra-ui/react";
import Giscus from "@giscus/react";
import {Outlet} from "@remix-run/react";
import styles from "highlight.js/styles/github-dark-dimmed.css";
import MotionRouter from "~/components/motion-router";
import globalStyles from "~/styles/global.css"

export const links = () => [
    {rel: "stylesheet", href: styles},
    {rel: "stylesheet", href: globalStyles}
];

export default function BlogDetail() {
    return (<MotionRouter>
            <Outlet/>
            <Box>
                <Divider color={"white"} my={6}/>
                <Giscus category="Announcements" theme={useColorModeValue("light", "dark")}
                        mapping={"pathname"} repo={"nguyenbatranvan/remix-app"} repoId={"R_kgDOICiicA"}/>
            </Box>
        </MotionRouter>
    )
}
