import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { MobileBookBar } from "./mobile-book-bar";
import { ScrollProgress } from "@/components/motion/scroll-progress";

export function PublicShell({ children }: { children: ReactNode }) { return <><ScrollProgress /><SiteHeader /><main id="main-content">{children}</main><SiteFooter /><MobileBookBar /></>; }
