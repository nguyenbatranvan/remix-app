import {json} from "@remix-run/node";
import type {MetaFunction} from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useFetcher, useLoaderData, useTransition,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
});
const fetcherJSON = (url: string, config?: RequestInit) => fetch(url, config).then((res) => res.json());

export const loader = async ({request}) => {
    const location = new URL(request.url)
    const config = await fetcherJSON(location.origin + `/config.json`);
    return json(config);
}

export default function App() {
    const data = useLoaderData();
    const transition = useTransition();
    const fetcher = useFetcher();
    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
