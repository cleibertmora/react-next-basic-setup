import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    },[]);

    return ( 
    <div className="not-found">
        <h1>Opss!!...</h1>
        <h2>That page is not found</h2>
        <p>Return to <Link href="/">Home</Link>.</p>
    </div> );
}
 
export default NotFound;