import type { CaseStudy } from "@/content/seed";
import { MonoLabel } from "./primitives";

export function CaseArt({ study }: { study: CaseStudy }) {
  const shapes = {
    apparel: <><rect x="34" y="42" width="232" height="128" rx="4" /><path d="M76 212H290M76 242H222M304 42v230" /><circle cx="362" cy="224" r="55" /></>,
    nutrition: <><path d="M45 255 113 184l57 42 81-128 61 50 71-87" /><circle cx="113" cy="184" r="9" /><circle cx="251" cy="98" r="9" /><rect x="323" y="154" width="73" height="118" rx="36" /></>,
    premium: <><rect x="52" y="55" width="298" height="205" rx="100" /><path d="M105 158h191M201 55v205" /><circle cx="387" cy="80" r="28" /></>,
    jewelry: <><circle cx="208" cy="156" r="104" /><circle cx="208" cy="156" r="54" /><path d="m208 18 18 46-18 37-18-37 18-46ZM208 294l18-46-18-37-18 37 18 46Z" /></>,
    beauty: <><rect x="72" y="42" width="102" height="232" rx="48" /><rect x="231" y="103" width="115" height="171" rx="8" /><path d="M95 85h56M259 137h59M259 164h41" /></>,
  };
  return <div className="case-art"><MonoLabel>{study.code}</MonoLabel><svg viewBox="0 0 430 320" fill="none" aria-hidden="true">{shapes[study.visual]}</svg></div>;
}
