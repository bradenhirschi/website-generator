import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Log in</CardTitle>
        </CardHeader>
        <form>
          <CardContent className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <Input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <Input id="password" name="password" type="password" required />
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant={"secondary"} formAction={signup}>
              Sign up
            </Button>
            <Button formAction={login}>Log in</Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
