import config from "@payload-config";
import "@payloadcms/next/css";
import { RootLayout, handleServerFunctions } from "@payloadcms/next/layouts";
import type { ServerFunctionClient } from "payload";
import { importMap } from "./admin/importMap";

export default function PayloadLayout({ children }: { children: React.ReactNode }) {
  async function serverFunction(args: Parameters<ServerFunctionClient>[0]) {
    "use server";
    return handleServerFunctions({ ...args, config, importMap });
  }
  return <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>{children}</RootLayout>;
}
