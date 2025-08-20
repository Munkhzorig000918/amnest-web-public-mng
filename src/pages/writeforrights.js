import Layout from "@/components/layout/Layout";
import WriteForRightsDesktop from "@/components/campaign/writeforrights/WriteForRightsDesktop";
import WriteForRightsMobile from "@/components/campaign/writeforrights/WriteForRightsMobile";
import { actionsService } from "@/services/apiService";
import moment from "moment";

export async function getServerSideProps() {
  try {
    // Fetch actions data with filters like the old web
    const queryParams = {
      populate: "*",
      sort: "createdAt:desc",
      locale: "mn",
      filters: {
        "$or[0][end_date][$notNull]": "",
        "$or[1][end_date][$gte]": moment().format("YYYY-MM-DD"),
      },
    };

    const actionsResponse = await actionsService.getActions(queryParams);

    return {
      props: {
        actions: actionsResponse.data || [],
        error: null,
      },
    };
  } catch (error) {
    console.error("Error fetching actions:", error);
    return {
      props: {
        actions: [],
        error: "Failed to load actions",
      },
    };
  }
}

export default function WriteForRights({ actions, error }) {
  return (
    <Layout>
      <WriteForRightsDesktop actions={actions} error={error} />
      <WriteForRightsMobile actions={actions} error={error} />
    </Layout>
  );
}
