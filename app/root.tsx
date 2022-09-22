// root.tsx
import {AnimatePresence} from "framer-motion";
import React, {useContext, useEffect} from 'react'
import {withEmotionCache} from '@emotion/react'
import {Box, ChakraProvider} from '@chakra-ui/react'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'
import {MetaFunction, LinksFunction, json} from '@remix-run/node'
import VoxelDog from "~/components/dog";
import DogLoader from "~/components/dog-loader";
import ThemeToggleButton from "~/components/theme-toggle-button";
import Layout from "~/layout";
import Navbar from "~/layout/navbar";
import {customTheme} from "~/theme/theme";
import {fetcherJSON} from "~/utils/fetch-json"; // Depends on the runtime you choose
import {motion} from "framer-motion";
import {ServerStyleContext, ClientStyleContext} from './context'

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'New Remix App',
    viewport: 'width=device-width,initial-scale=1',
});

export let links: LinksFunction = () => {
    return [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap'
        },
    ]
}

interface DocumentProps {
    children: React.ReactNode;
}

export const loader = async ({request}) => {
    const location = new URL(request.url)
    const config = await fetcherJSON(location.origin + `/config.json`);
    return json(config);
}

const Document = withEmotionCache(
    ({children}: DocumentProps, emotionCache) => {
        const serverStyleData = useContext(ServerStyleContext);
        const clientStyleData = useContext(ClientStyleContext);

        // Only executed on client
        useEffect(() => {
            // re-link sheet container
            emotionCache.sheet.container = document.head;
            // re-inject tags
            const tags = emotionCache.sheet.tags;
            emotionCache.sheet.flush();
            tags.forEach((tag) => {
                (emotionCache.sheet as any)._insertTag(tag);
            });
            // reset cache to reapply global styles
            clientStyleData?.reset();
        }, []);

        return (
            <html lang="en">
            <head>
                <Meta/>
                <Links/>
                {serverStyleData?.map(({key, ids, css}) => (
                    <style
                        key={key}
                        data-emotion={`${key} ${ids.join(' ')}`}
                        dangerouslySetInnerHTML={{__html: css}}
                    />
                ))}
            </head>
            <body>
            {children}
            <ScrollRestoration/>
            <Scripts/>
            <LiveReload/>
            </body>
            </html>
        );
    }
);


export default function App() {

    return (
        <Document>
            <ChakraProvider theme={customTheme}>
                <AnimatePresence exitBeforeEnter initial={true} onExitComplete={() => {
                    if (typeof window !== 'undefined') {
                        window.scrollTo({top: 0})
                    }
                }}>
                    <Layout>
                        <Box marginTop={"40px"}>
                            <VoxelDog/>
                        </Box>
                        <Outlet/>
                    </Layout>
                </AnimatePresence>
            </ChakraProvider>
        </Document>
    )
}
