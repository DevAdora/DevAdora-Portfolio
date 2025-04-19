export default function Contact() {
  return (
    <div className="p-8">
      <div className="contact p-8 w-full min-h-screen flex flex-col justify-between">
        <div className=" flex flex-col items-center justify-center text-center">
          <p className="text-sm mb-2">(Need an unfair advantage?)</p>
          <h1 className="text-5xl md:text-[8rem]  lg:text-[8rem] font-bold leading-tight">
            LET'S MAKE <br /> IT HAPPEN
          </h1>
          <button className="mt-8 bg-[#c9c9c1] text-[#323333] font-semibold py-3 px-8 rounded-full text-lg transition-all cursor-pointer">
            BOOK A CALL ↗
          </button>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-xs">
          <div className="flex items-center space-x-2 border border-[#323333] rounded-md px-3 py-2">
            <span className="text-xl">🌍</span>
            <div className="flex flex-col leading-tight">
              <span>Working Globally</span>
              <span>Available Apr ‘25</span>
            </div>
          </div>

          <div className="text-right mt-4 md:mt-0">
            <p className="uppercase font-semibold">For Further Inquiries</p>
            <a href="mailto:raireyesjr@gmail.com" className="hover:underline">
              ↳ raireyesjr@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
