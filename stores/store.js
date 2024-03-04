import { atom } from "nanostores"; 

export const $data = atom([]);

export function addData(newData) {
    $data.set(currentData => [...currentData, newData]);
}
