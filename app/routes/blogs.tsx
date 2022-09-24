import {SimpleGrid} from "@chakra-ui/react";
import {json, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import * as fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import CardThumbnail from "~/components/card";
import MotionRouter from "~/components/motion-router";

export const loader = async () => {
    const files = fs.readdirSync(path.resolve('app/routes/blog-detail'));
    const posts = files.map(filename => {
        const slug = filename.replace(/\.mdx?$/, "");
        const markDownWithMeta = fs.readFileSync(path.resolve('app/routes/blog-detail', filename), 'utf-8');
        const {data: meta} = matter(markDownWithMeta);
        return {slug, meta}
    });
    return json(posts);
}
export default function Blogs() {
    const posts = useLoaderData();
    return (<MotionRouter>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {posts.map((post, index) => <CardThumbnail href={`/blog-detail/${post.slug}`} key={`blog-${index}`}
                                                       thumbnail={post.meta.meta.image} title={post.meta.meta.title}>
                {post.meta.meta.description}
            </CardThumbnail>)}
        </SimpleGrid>
    </MotionRouter>)
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
    const postTitles = data.map(post => post.meta.meta.title);
    const {image} = data[0].meta.meta;
    return {
        title: "Blog page portfolio of nguyen ba tran van",
        description: `List of blogs: ${postTitles.join(',')}`,
        "og:description": `List of blogs: ${postTitles.join(',')}`,
        image,
        "og:image": image
    }
}
