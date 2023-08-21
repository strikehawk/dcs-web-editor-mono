export interface LatLon {
    lat: number;
    lon: number;
}
export declare function ConvertDMSToDD(degrees: number, minutes: number, seconds: number, direction: string): number;
export declare function convertDMS(lat: number, lon: number): string;
export declare function convertDMshort(lat: number, lon: number): string;
export declare function convertDMM(lat: number, lon: number): string;
export declare function toHHMMSS(s: number): string;
export declare function convertDD(lat: number, lon: number): string;
export declare function LLtoAll(lat: number, lon: number): {
    DD: string;
    MGRS: any;
    DMS: string;
    DMM: string;
};
export declare function LLtoMGRS(lat: number, lon: number): any;
export declare function calcBearing(start: LatLon, end: LatLon): number;
export declare function calcDistance(start: LatLon, end: LatLon): number;
export declare const M_TO_FEET = 3.28084;
export declare const M_TO_NM = 0.000539957;
export declare const KM_TO_NM: number;
export declare const MS_TO_KTS = 1.94384;
export declare const MS_TO_KMH = 3.6;
export declare const KG_TO_LBS = 2.20462;
export declare const MMHG_TO_INHG = 0.0393701;
export declare function msToKts(metersPerSecond?: number): string;
export declare function toFeet(meters?: number): string;
export declare function toNm(meters?: number): string;
export declare function toDeg(rad?: number): string;
export declare function toRad(deg?: number): number;
export declare function rgbToInt(r: number, g: number, b: number): number;
export declare function toRgba(r: number, g: number, b: number, a: number): string;
export declare function rgbaToHex(r: number, g: number, b: number, a: number): string;
export declare function rgbToHex(r: number, g: number, b: number): string;
export declare function hexaToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
    a: number;
} | null;
export declare function toFahrenheit(celsius: number): number;
export declare const MORSE: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
    g: string;
    h: string;
    i: string;
    j: string;
    k: string;
    l: string;
    m: string;
    n: string;
    o: string;
    p: string;
    q: string;
    r: string;
    s: string;
    t: string;
    u: string;
    v: string;
    w: string;
    x: string;
    y: string;
    z: string;
    ' ': string;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
    '9': string;
    '0': string;
};
export declare const truncateString: (string?: string, maxLength?: number) => string;
export declare function downloadJson(json: any, name: string): void;
export declare function downloadBlob(url: string, fileName: string): void;
export declare function isTranslation(name: string): RegExpMatchArray | null;
export declare function translate(key: string, dictionary: Record<string, string>): string;
