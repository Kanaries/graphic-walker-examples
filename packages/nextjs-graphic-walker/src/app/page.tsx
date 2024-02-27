import dynamic from "next/dynamic";

const GraphicWalker = dynamic(() => import("./walker").then(res => res.default), {
    ssr: false,
});

export default function Home() {
    return (
        <main className="">
            <div className="container mx-auto">
                <div className="rounder shadow p-4 bg-white dark:bg-zinc-900">
                    {/* <GraphicWalker /> */}
                    <GraphicWalker />
                </div>
            </div>
        </main>
    );
}
