import NavBar from "@/components/Navbar";
import prisma from "../../lib/prisma";

const getData = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
};

export default async function Home() {
  const posts = await getData();
  return (
    <>
      <div className="pt-[100px]">{posts[0].content}123</div>
      <NavBar className="fixed top-0" />
    </>
  );
}
