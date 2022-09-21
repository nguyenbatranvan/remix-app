import {json, MetaFunction} from "@remix-run/node";
import {useFetcher, useLoaderData, useTransition} from "@remix-run/react";
import {useEffect} from "react";

type Props = {
    products: any[]
}
export const loader = async (dataa) => {
    console.log('data',dataa)
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
    return (<>
        <h1>This is product</h1>
        <button onClick={loadProduct}>
            Load product
        </button>
        {products.map(product => <p key={product.id}>{product.title}</p>)}
    </>)
}
export const meta: MetaFunction<typeof loader> = ({data, parentsData}) => {
    const description = data.products.map((product: any) => product.title);
    console.log('par',parentsData)
    return {
        title: "Product app",
        description: `page is seo product ${description.join(',')}`
    }
};
