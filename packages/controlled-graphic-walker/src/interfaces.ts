export interface IRow {
    [key: string]: any;
}

export interface IMeta {
    fid: string;
    name?: string;
    semanticType: any;
    analyticType: any;
}

export interface IDataset {
    dataSource: IRow[];
    fields: IMeta[];
}