// import dynamic from "next/dynamic";
import GraphicWalker from "./walker";

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
