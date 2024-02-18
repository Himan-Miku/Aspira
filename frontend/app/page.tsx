"use client";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div
          onClick={async () => {
            const res = await fetch("http://localhost:4000/api/getgay");
            const data = await res.json();
            console.log(data);
          }}
        >
          Click Me
        </div>
        <div
          onClick={() => {}}
          className="p-4 border border-red-400 cursor-pointer"
        >
          Frontend Engineer
        </div>
        <div
          onClick={() => {}}
          className="p-4 border border-red-400 cursor-pointer"
        >
          Digital Marketing
        </div>
        <div
          onClick={() => {}}
          className="p-4 border border-red-400 cursor-pointer"
        >
          Site Reliability Engineer
        </div>
      </div>
    </main>
  );
}
