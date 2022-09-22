import {json, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import data from '~/json/json-blog.json';

export const loader = async () => {
    return json(data);
}

export default function Blogs() {
    const {posts} = useLoaderData();
    return (<>
        {posts.map(item => <p key={item.id}>{item.title}</p>)}
    </>)
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
    const postTitles = data.posts.map(post => post.title);
    return {
        title: "Blog page app",
        description: `${postTitles.join(',')}`
    }
}
