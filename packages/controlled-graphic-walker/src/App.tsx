import { useEffect, useRef, useState } from "react";
import { GraphicWalker, IGlobalStore } from "@kanaries/graphic-walker";
import { IDataset } from "./interfaces";
import "./App.css";

function App() {
    const [dataset, setDataset] = useState<IDataset | null>(null);
    const storeRef = useRef<IGlobalStore>(null);
    useEffect(() => {
        fetch("/ds-cars-service.json")
            .then((res) => res.json())
            .then((data: IDataset) => {
                setDataset(data);
            });
    }, []);
    const saveAllCharts = () => {
        if (storeRef.current) {
            const result = storeRef.current.vizStore.exportViewSpec();
            localStorage.setItem(
                "graphic-walker-storage",
                JSON.stringify(result)
            );
        }
    };

    const loadAllCharts = () => {
        if (storeRef.current) {
            const raw = localStorage.getItem("graphic-walker-storage");
            if (raw && dataset !== null) {
                storeRef.current.vizStore.importStoInfo({
                    dataSources: [
                        {
                            id: "dataSource-0",
                            data: dataset?.dataSource || [],
                        },
                    ],
                    datasets: [
                        {
                            id: "dataset-0",
                            name: "DataSet",
                            rawFields: dataset?.fields || [],
                            dsId: "dataSource-0",
                        },
                    ],
                    specList: JSON.parse(raw),
                });
            }
        }
    };
    return (
        <>
            <div className="flex gap-4">
                <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={saveAllCharts}
                >
                    Save All Charts
                </button>
                <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={loadAllCharts}
                >
                    Load All Charts
                </button>
            </div>
            {dataset && (
                <GraphicWalker
                    storeRef={storeRef}
                    hideDataSourceConfig
                    fieldKeyGuard={false}
                    rawFields={dataset.fields}
                    dataSource={dataset.dataSource}
                />
            )}
        </>
    );
}

export default App;
