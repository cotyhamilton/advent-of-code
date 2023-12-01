export const getLinesFromFile = async (file: string) => {
    const contents = await Deno.readTextFile(file);
    return contents.trim().split((/\r?\n/));
}