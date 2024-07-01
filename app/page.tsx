import dynamic from "next/dynamic";

const Giscus = dynamic(() => import("@/app/giscus").then((m) => m.Giscus), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Giscus />
    </main>
  );
}
