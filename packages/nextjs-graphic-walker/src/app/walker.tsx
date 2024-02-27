"use client";

import { GraphicWalker, getColorConfigFromPalette, getPaletteFromColor } from "@kanaries/graphic-walker";

const colorConfig = getColorConfigFromPalette(getPaletteFromColor("slate-500"));
colorConfig.dark.background = "zinc-900";

function Walker() {
    return <GraphicWalker dataSource={[]} rawFields={[]} colorConfig={colorConfig} />;
}
export default Walker;
