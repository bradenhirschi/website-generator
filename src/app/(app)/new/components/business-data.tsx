import Link from "next/link";
import { useNewSiteContext } from "../new-site-context";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Database, Tables } from "@/types/supabase";
import { createInitialSiteData } from "../actions";

export default function BusinessData() {
  const [loading, setLoading] = useState<boolean>(true);
  const { selectedBusiness } = useNewSiteContext();

  useEffect(() => {
    const updateData = async () => {
      await createInitialSiteData(selectedBusiness);
      setLoading(false);
    };

    updateData();
  }, []);

  if (loading) return <></>;

  return (
    <>
      <h1 className="mb-4">Selected Business</h1>
      <Button>
        <Link href={"http://localhost:3001"}>View Site</Link>
      </Button>
      <p className="text-gray-600 mt-2 mb-6">
        {JSON.stringify(selectedBusiness)}
      </p>
    </>
  );
}
