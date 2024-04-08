import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <h1>Ceci est la page de départ !</h1>
      <div className="flex gap-4">
        <Link href="/login">
          <Button>Se connecter</Button>
        </Link>
        <Link href="/signup">
          <Button>Se créer un compte</Button>
        </Link>
      </div>
    </main>
  );
}
