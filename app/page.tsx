import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-0"></div>
    </main>
  );
}
