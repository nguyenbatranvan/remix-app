import { SimpleGrid} from "@chakra-ui/react";
import {json, MetaFunction} from "@remix-run/node";
import { useLoaderData} from "@remix-run/react";
import React from "react";
import CardThumbnail from "~/components/card";
import MotionRouter from "~/components/motion-router";
import * as axiosFirstBlog from "./axios-first-blog.mdx";
import * as loadConfigBlog from "./load-config.mdx";

function postFromModule(mod) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ""),
        ...mod.attributes.meta,
    };
}

export const loader = async () => {
    return json([
        postFromModule(axiosFirstBlog),
        postFromModule(loadConfigBlog)
    ]);
}
export default function Index() {
    const posts = useLoaderData();
    return (<MotionRouter>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {posts.map((post,index) => <CardThumbnail href={post.slug} key={`blog-${index}`} thumbnail={post.image} title={post.title}>
                {post.description}
            </CardThumbnail>)}
        </SimpleGrid>
    </MotionRouter>)
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
    const postTitles = data.map(post => post.title);
    return {
        title: "Blog page portfolio of nguyen ba tran van",
        description: `List of blogs: ${postTitles.join(',')}`,
        "og:description": `List of blogs: ${postTitles.join(',')}`,
        image: `${data[0].image}`,
        "og:image": `${data[0].image}`
    }
}
