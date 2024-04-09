import Scroll from "@/components/messenger/scroll";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-[90%] h-[90%] border-4 rounded-xl">
        <div className="h-full w-1/4 border-r-4">
          <Scroll />
        </div>
      </div>
    </main>
  );
}
