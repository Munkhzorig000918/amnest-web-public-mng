import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import WriteForRightsActionDesktop from "@/components/campaign/writeforrights/WriteForRightsActionDesktop";
import WriteForRightsActionMobile from "@/components/campaign/writeforrights/WriteForRightsActionMobile";

export default function WriteForRightsAction() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <WriteForRightsActionDesktop actionId={id} />
      <WriteForRightsActionMobile actionId={id} />
    </Layout>
  );
}
