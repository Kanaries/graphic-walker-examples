'use client'

import dynamic from 'next/dynamic';

const GraphicWalker = dynamic(() => {
    return import('@kanaries/graphic-walker').then(res => res.GraphicWalker)
}, {
    ssr: false
})

function Walker () {
    return <GraphicWalker />
}
export default Walker;