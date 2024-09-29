import { ThemeToggle } from "@/components/theme-toggle";
import { NewSiteContextProvider } from "./new-site-context";
import { Home } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export default function NewSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NewSiteContextProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-muted p-6 space-y-2 shrink-0 flex flex-col">
          <h3>Website Builder</h3>
          <div className="flex flex-row justify-between gap-2">
            <ButtonLink className="w-full" href="/" variant={"outline"}>
              <Home size={19} />
              &nbsp; Home
            </ButtonLink>
            <ThemeToggle />
          </div>
        </div>
        {children}
      </div>
    </NewSiteContextProvider>
  );
}
