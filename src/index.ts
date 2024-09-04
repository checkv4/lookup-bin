import fs from "fs"
import path from "path"

// 指定文件夹路径
const binPath = path.join(import.meta.dirname, '../bins.csv');
export interface BinInfo {
    bin: string;
    card_brand: string;
    card_type: string;
    card_level: string;
    bank_name: string;
    bank_website: string;
    bank_phone: string;
    country_name: string;
    country_code: string;
    country_iso3: string;
    currency: string;
}

function LoadBins() {
    if (!fs.existsSync(binPath)) {
        throw new Error("The bins.csv file does not exist.")
    }
    // if (bins) return bins;
    const objs:{[key:string]:BinInfo} = {};
    fs.readFileSync(binPath).toString("utf8").split("\n").forEach(x => {
        const arr = x.trim().split(",").map(x => decodeURIComponent(x.trim()));
        const bin = {
            bin: arr[0],
            card_brand: arr[1],
            card_type: arr[2],
            card_level: arr[3],
            bank_name: arr[4],
            bank_website: arr[5],
            bank_phone: arr[6],
            country_name: arr[7],
            country_code: arr[8],
            country_iso3: arr[9],
            currency: arr[10],
        }
        objs[bin.bin] = bin;
    })
    return objs;
}
export const bins:{[key:string]:BinInfo} = (global as any).lookupBins = (global as any).lookupBins || LoadBins();


export function ToBin(card:string):string {
    return (card + "").substring(0, 6)
}

export function FindBin(bin:string):BinInfo {
    bin = ToBin(bin);
    if (!bins) {
        LoadBins()
    }
    return bins[bin]
}

