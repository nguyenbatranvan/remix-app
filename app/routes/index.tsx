import {Button} from "@chakra-ui/react";
import {MetaFunction} from "@remix-run/node";
import {useNavigate} from "@remix-run/react"
import {variants} from "~/utils/variants-motion";
import {motion} from "framer-motion";

export default function Index() {
    const navigate = useNavigate();
    const onProducts = () => {
        navigate('/product');
    }

    const onBlogs = () => {
        navigate('/blogs');
    }
    return (<motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{duration: 0.4, type: 'easeInOut'}}
            style={{position: 'relative'}}
        >
            <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
                <h1>Welcome to Remix</h1>
                <Button colorScheme={"blue"} onClick={onProducts} type={"button"}>
                    Products
                </Button>
                <Button colorScheme={"blue"} onClick={onBlogs} type={"button"}>Blogs</Button>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            href="https://remix.run/tutorials/blog"
                            rel="noreferrer"
                        >
                            15m Quickstart Blog Tutorial
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://remix.run/tutorials/jokes"
                            rel="noreferrer"
                        >
                            Deep Dive Jokes App Tutorial
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                            Remix Docs
                        </a>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
}

export const meta: MetaFunction = () => ({
    title: "Product app",
    description: "page is seo product"
});
