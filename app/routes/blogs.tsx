import {json, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import React, {lazy} from "react";
import data from '~/json/json-blog.json';
import {motion} from "framer-motion";
import {variants} from "~/utils/variants-motion";

export const loader = async () => {
    return json(data);
}
export default function Blogs() {
    const {posts} = useLoaderData();
    return ( <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{duration: 0.4, type: 'easeInOut'}}
        style={{position: 'relative'}}>
        {posts.map(item => <p key={item.id}>{item.title}</p>)}
    </motion.div>)
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
    const postTitles = data.posts.map(post => post.title);
    return {
        title: "Blog page app",
        description: `${postTitles.join(',')}`
    }
}
