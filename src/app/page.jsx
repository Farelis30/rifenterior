import { MediaSlider } from "@/components/ui/media-slider";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[100vh] grid place-items-center relative">
        <MediaSlider
          media={[{ type: "video", src: "/homeShowcase/home.mp4" }]}
          overlay={false}
        />
        <div className="absolute w-full h-screen bg-black/60 z-10"></div>
        <div className="text-white absolute z-20 text-center flex flex-col gap-6 p-6 md:p-0">
          <h2 className=" text-white text-[min(12vw,2.25rem)] tracking-widest leading-relaxed">
            WELCOME TO RIFENTERIOR
          </h2>
          <p className="text-[min(12vw,1.25rem)]">
            Beautiful Spaces, Meaningful Living
          </p>
        </div>
      </div>
    </div>
  );
}
