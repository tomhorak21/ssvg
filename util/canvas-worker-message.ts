import {VdomNode} from "./vdomManager";

export interface CanvasWorkerMessage {
    cmd: 'INIT'|'UPDATE_NODES'|'UPDATE_SIZE';
    data?: any;
}

export interface CanvasUpdateWorkerMessage {
    cmd: 'UPDATE_NODES';
    data: {
        enterExit: CanvasUpdateData[],
        update: any
    };
}

export type CanvasUpdateData = ({ cmd: 'ENTER', node: VdomNode, parentNodeSelector: string, keepChildren: boolean }|
    { cmd: 'EXIT', childIndex: number, parentNodeSelector: string });