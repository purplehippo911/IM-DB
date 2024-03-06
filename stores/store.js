import { atom, use } from "nanostores"; 

export const $data = atom(["apple", "orange"]);

export function addData(newData) {
    use($data, currentData => [...currentData, newData]);
}