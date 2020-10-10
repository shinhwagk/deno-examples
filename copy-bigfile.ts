import { BufReader } from "https://deno.land/std/io/mod.ts";

const srcFile = await Deno.open("./big.src.file", { read: true });
const bufReader = new BufReader(srcFile);
const dstFile = await Deno.open('./big.dst.file', { create: true, write: true })
await Deno.copy(bufReader, dstFile);
srcFile.close();
dstFile.close()
