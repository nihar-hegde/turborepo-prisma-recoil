import { Button } from "@repo/ui/components/ui/button";
import { Separator } from "@repo/ui/components/ui/separator";
import prisma from "@repo/database";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col gap-2 items-center justify-center p-28">
      <div className="text-5xl font-bold">Hello</div>
      <Button>Hello</Button>
      <Separator />
    </main>
  );
}
