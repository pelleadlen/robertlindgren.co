import ClockNew from "./components/clockNew";

import Footer from "./components/footer";

export default function Home() {
  return (
    <main className=" h-svh relative p-6 flex-col items-center justify-between text-sm tracking-tight">
      <div className="w-[180px]">
        <h1 className="mb-6">Robert Lindgren</h1>
        <h2 className="mb-4">
          Designing digital products and brands with people I look up to. Let me
          show you!
        </h2>
        <div className="flex gap-2 mb-1">
          <a
            href="https://www.linkedin.com"
            className="bg-white text-black px-1"
          >
            Book meeting
          </a>
          <p>or:</p>
        </div>
        <div className="flex flex-col">
          <a href="mailto:hello@robertlindgren.co">hello@robertlindgren.co</a>
          <a href="mailto:business@robertlindgren.co">
            business@robertlindgren.co
          </a>
        </div>
      </div>
      <ClockNew />
      <Footer />
    </main>
  );
}
