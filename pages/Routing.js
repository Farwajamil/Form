import styles from "../styles/Home.module.css";
import Link from 'next/Link';
function index() {
    return (
     <div className={styles.home}>
         <ul>
         <Link href="/Routing/Home">
            <a>Home</a>
         </Link>
         <Link href="/Routing/About">
         <a> About</a>
         </Link>
         <Link href="/Routing/Blog">
         <a> Blog </a>
         </Link>
         <Link href="/Routing/Service">
         <a>Service </a>
         </Link>
         </ul>
     </div>
    );
  }
  export default index;