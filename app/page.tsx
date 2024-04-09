import HeaderMessenger from "@/components/messenger/header_messenger";
import Scroll from "@/components/messenger/scroll";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-[90%] h-[90%] border-4 rounded-xl flex flex-row">
        <div className="h-full w-1/4 overflow-hidden">
          <div className="h-[10%] border-r-4">
            <h2 className="font-bold text-xl p-4">Mes contacts</h2>
          </div>
          <div className="h-[90%] border-r-4">
            <Scroll />
          </div>
        </div>
        <div className="h-full w-3/4 overflow-hidden">
          <div className="h-[10%] border-b-2 flex flex-col justify-center px-4">
            <HeaderMessenger />
          </div>
          <div className="h-[90%]"></div>
        </div>
      </div>
    </main>
  );
}
