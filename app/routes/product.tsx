import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import {json, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import MotionRouter from "~/components/motion-router";
import ProductCard from "~/components/product-card";
import {fetcherJSON} from "~/utils/fetch-json";
import {variants} from "~/utils/variants-motion";
import {motion} from "framer-motion";

type Props = {
    products: any[]
}
export const loader = async () => {
    const data = await fetcherJSON("https://dummyjson.com/products")
    return json<Props>(data);
};
export default function Product() {
    const {products} = useLoaderData() as Props;
    const loadProduct = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
    }
    return (<MotionRouter>
            <Heading variant={"title-under-line"}>
                Products
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                {products.map(product => <ProductCard key={product.id} image={product.thumbnail}/>)}

            </SimpleGrid>
    </MotionRouter>)
}
export const meta: MetaFunction<typeof loader> = ({data, parentsData}) => {
    const description = data.products.map((product: any) => product.title);
    return {
        title: "Product app",
        description: `page is seo product ${description.join(',')}`,
        "og:description": `page is seo product ${description.join(',')}`,
        "og:image": `${data.products[0].thumbnail}`
    }
};
