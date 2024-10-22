import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const asciiArt = `
.___                     .__                         ____   _____________  
|   | _____ ______  __ __|  |   ________ __  _____   \\   \\ /   /\\_   ___ \\ 
|   |/     \\\\____ \\|  |  \\  |  /  ___/  |  \\/     \\   \\   Y   / /    \\  \\/ 
|   |  Y Y  \\  |_> >  |  /  |__\\___ \\|  |  /  Y Y  \\   \\     /  \\     \\____
|___|__|_|  /   __/|____/|____/____  >____/|__|_|  /    \\___/    \\______  /
          \\/|__|                   \\/            \\/                     \\/ 
`;

  return (
      <div
          className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <pre className="ascii-art text-sm sm:text-base whitespace-pre-wrap leading-tight rotate-3d">
          {asciiArt}
        </pre>
        </main>
        <style jsx>{`
          @keyframes rotate3dImproved {
            0% {
              transform: rotateX(0deg) rotateY(0deg);
              opacity: 1;
            }
            25% {
              transform: rotateX(0deg) rotateY(90deg);
              opacity: 0.8;
            }
            50% {
              transform: rotateX(0deg) rotateY(180deg);
              opacity: 0.6;
            }
            75% {
              transform: rotateX(0deg) rotateY(270deg);
              opacity: 0.8;
            }
            100% {
              transform: rotateX(0deg) rotateY(360deg);
              opacity: 1;
            }
          }

          .rotate-3d {
            animation: rotate3dImproved 5s infinite linear; 
            transform-style: preserve-3d;
            perspective: 1000px;
          }
        `}</style>
      </div>
  );
}
