// app/page.tsx
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0067c4] text-white relative overflow-hidden">



      {/* Main Banner */}
      <div className="text-center">

        <div className="mt-3 flex flex-col items-center">
          {/* Worker Icon */}
          <div className="relative h-175 w-175 opacity-90">
            <Image
              src="/main.png" 
              alt="Under Construction Worker"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-white/80">
        © {new Date().getFullYear()} Nehetek Technology Solutions, LLC
      </footer>
    </main>
  )
}
