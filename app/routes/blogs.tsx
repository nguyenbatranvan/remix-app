import {Container, SimpleGrid} from "@chakra-ui/react";
import {json, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import React, {lazy} from "react";
import CardThumbnail from "~/components/card";
import MotionRouter from "~/components/motion-router";
import data from '~/json/json-blog.json';
import {motion} from "framer-motion";
import {variants} from "~/utils/variants-motion";

export const loader = async () => {
    return json(data);
}
export default function Blogs() {
    const {posts} = useLoaderData();
    return (<MotionRouter>
        <Container><SimpleGrid columns={[1, 1, 2]} gap={6}>
            {posts.map(post => <CardThumbnail key={post.id} thumbnail={post.image} title={post.title}>
                {post.body}
            </CardThumbnail>)}
        </SimpleGrid>
        </Container>
    </MotionRouter>)
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
    const postTitles = data.posts.map(post => post.title);
    return {
        title: "Blog page portfolio of nguyen ba tran van",
        description: `List of blogs: ${postTitles.join(',')}`,
        "og:description": `List of blogs: ${postTitles.join(',')}`,
        image: `/images/blogs/blog-2.png`,
        "og:image": `/images/blogs/blog-2.png`
    }
}
