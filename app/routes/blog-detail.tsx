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
    </MotionRouter>)
}
