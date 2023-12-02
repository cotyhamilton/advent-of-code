import { path } from "./deps.ts";

export const getLinesFromFile = async (file: string) => {
    const contents = await Deno.readTextFile(file);
    return contents.trim().split((/\r?\n/));
}

export const getModuleDirectory = (meta: ImportMeta) => {
    return path.resolve(path.dirname(path.fromFileUrl(meta.url)));
}