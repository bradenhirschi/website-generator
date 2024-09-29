import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main>
      <Card>
        <Link href={"new"}>New site</Link>
      </Card>
    </main>
  );
}
