import Giscus from "@giscus/react";
import {Outlet} from "@remix-run/react";
import styles from "highlight.js/styles/github-dark-dimmed.css";
import MotionRouter from "~/components/motion-router";
import globalStyles from "~/styles/global.css"

export const links = () => [
    {rel: "stylesheet", href: styles},
    {rel: "stylesheet", href: globalStyles}
];

export default function BlogDetail(){
    return (<MotionRouter>
        <Outlet/>
        {/*<script src="https://giscus.app/client.js"*/}
        {/*        data-repo="nguyenbatranvan/remix-app"*/}
        {/*        data-repo-id="R_kgDOICiicA"*/}
        {/*        data-category="Announcements"*/}
        {/*        data-category-id="[ENTER CATEGORY ID HERE]"*/}
        {/*        data-mapping="pathname"*/}
        {/*        data-strict="0"*/}
        {/*        data-reactions-enabled="1"*/}
        {/*        data-emit-metadata="0"*/}
        {/*        data-input-position="bottom"*/}
        {/*        data-theme="preferred_color_scheme"*/}
        {/*        data-lang="en"*/}
        {/*        crossOrigin="anonymous"*/}
        {/*        async>*/}
        {/*</script>*/}
        <Giscus category="Announcements" mapping={"pathname"} repo={"nguyenbatranvan/remix-app"} repoId={"R_kgDOICiicA"}/>
    </MotionRouter>)
}
