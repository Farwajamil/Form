import react from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>{slug}</p>;
};
export default slug;
