import { useRouter } from "next/router";
import { useEffect } from "react";

export default function StructureExecuteManagers() {
  const router = useRouter();

  useEffect(() => {
    router.push("/about-us/structure/chapter-members");
  }, [router]);

  return null;
}
