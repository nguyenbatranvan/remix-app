import {json, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {variants} from "~/utils/variants-motion";
import {motion} from "framer-motion";

type Props = {
    products: any[]
}
export const loader = async (dataa) => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return json<Props>(data);
};
export default function Product() {
    const {products} = useLoaderData() as Props;
    const loadProduct = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
    }
    return (<motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{duration: 0.4, type: 'easeInOut'}}
        style={{position: 'relative'}}
    >
        <h1>This is product</h1>
        <button onClick={loadProduct}>
            Load product
        </button>
        {products.map(product => <p key={product.id}>{product.title}</p>)}
    </motion.div>)
}
export const meta: MetaFunction<typeof loader> = ({data, parentsData}) => {
    const description = data.products.map((product: any) => product.title);
    return {
        title: "Product app",
        description: `page is seo product ${description.join(',')}`
    }
};
