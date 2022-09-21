import {MetaFunction, redirect} from "@remix-run/node";
import{useNavigate} from"@remix-run/react"
export default function Index() {
  const navigate=useNavigate();
  const onProducts=()=>{
    console.log('111')
    navigate('/product');
    // redirect('/product')
  }
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <button onClick={onProducts} type={"button"}>
        Products
      </button>
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
  );
}

export const meta: MetaFunction = () => ({
  title: "Product app",
  description:"page is seo product"
});
