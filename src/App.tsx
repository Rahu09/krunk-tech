import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BadgeCheck,
  ChevronRight,
  Paperclip,
  SlidersHorizontal,
  X,
} from "lucide-react";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-gray-400">
      <div
        className="flex flex-col justify-end items-center h-[792px] w-[380px] border-white  border-[6px] bg-white"
        style={{ borderRadius: "20px" }}
      >
        <div
          className="bg-[#eff3fd] w-full h-[75px] flex flex-row justify-between align-middle text-blue-500"
          style={{ borderTopLeftRadius: "14px", borderTopRightRadius: "14px" }}
        >
          <div className="h-full flex justify-center items-center align-middle px-5">
            <div className="flex flex-row items-end">
              <Avatar className="h-11 w-11 mr-4">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="bg-green-400 rounded-full h-[9px] w-[9px] ml-[-26px] z-10"></div>
            </div>
            <div className="ml-4">
              <div className="flex flex-row items-center">
                <p className="font-bold text-xl pr-1">Timpu</p>
                <BadgeCheck size={18} color="#f5cd31" fill="#ffec91" />
              </div>
              <p className=" font-semibold">Chat assistant</p>
            </div>
          </div>

          <div className=" h-ful flex justify-center items-center pt-6 mx-4">
            <div className="bg-green-400 rounded-full h-2 w-2 mx-2"></div>
            <p className="font-semibold">Online</p>
          </div>
        </div>

        {/* chat content */}
        <div className="h-[640px] w-full m-0 mb-1 p-0 bg-gradient-to-b from-white from-80% via-white to-[#F4F4F4] flex flex-col justify-end px-[15px]">
          <div className="h-[100px] w-full flex flex-col items-start  mb-[20px]">
            <div className="w-[240px] h-[80px] bg-gradient-to-br from-[#e5eefe] to-[#f8faff] p-2 rounded-xl text-sm">
              <p>
                Hi Sam! I am your personal shopping assistant , how can i help
                you today ?
              </p>
            </div>
            <p className="text-[10px] text-[#4d4d4d] mx-3 mt-1 font-semibold">
              4:48 PM
            </p>
          </div>

          <div className="h-[80px] w-full flex flex-col items-end  mb-[20px]">
            <div className="w-[213px] h-[60px] bg-[#dbf6c7] p-2 rounded-xl text-sm">
              <p>I am looking for a hand bag, with long strap .</p>
            </div>
            <p className="text-[10px] text-[#4d4d4d] mx-3 mt-1 font-semibold">
              4:48 PM
            </p>
          </div>
          <div className="h-[60px] w-full  mb-[20px]">
            <div>
              <p className="text-sm text-[#949494]">Popular tags for handbag</p>
              <div className="flex flex-row items-center ">
                <div className="flex flex-row overflow-hidden">
                  <div className="px-2.5 mx-1 my-1 rounded-md flex justify-center items-center border-[#5b94ee] border-2 bg-[#f6f9ff]  text-sm text-[#5b94ee] min-w-fit h-[30px]">
                    Clutch
                  </div>
                  <div className="px-2.5 mx-1 my-1 rounded-md flex justify-center items-center border-[#5b94ee] border-2 bg-[#f6f9ff]  text-sm text-[#5b94ee] min-w-fit h-[30px]">
                    Fabric Lining
                  </div>
                  <div className="px-2.5 mx-1 my-1 rounded-md flex justify-center items-center border-[#5b94ee] border-2 bg-[#f6f9ff]  text-sm text-[#5b94ee] min-w-fit h-[30px]">
                    Baggit
                  </div>
                  <div className="px-2.5 mx-1 my-1 rounded-md flex justify-center items-center border-[#5b94ee] border-2 bg-[#f6f9ff]  text-sm text-[#5b94ee] min-w-fit h-[30px]">
                    Multi Compartment
                  </div>
                </div>

                <ChevronRight />
              </div>
            </div>
          </div>
          <div className="h-[259px] w-full">
            <div className="h-[161px] mb-[10px]">
              <div className="h-[141px] w-[250px] bg-gradient-to-br from-[#e5eefe] to-[#f8faff] rounded-3xl p-[10px]">
                <div className="w-[230px] h-[71px] rounded-xl bg-white flex flex-row">
                  <img src="./Frame.png" className="p-[10px]" alt="" />
                  <div>
                    <div className="flex flex-row items-center text-sm font-semibold">
                      <p className="px-1 py-[10px]">Bags on Timpu</p>
                      <BadgeCheck size={18} color="#f5cd31" fill="#ffec91" />
                    </div>
                    <div className="flex flex-row text-[12px] justify-between items-center font-semibold text-[#949494]">
                      <p>1123 Products</p> <ChevronRight color="#949494" />
                    </div>
                  </div>
                </div>
                <p className="text-sm mt-[10px]">
                  Or set filter and help us choose the best bag for you.
                </p>
              </div>
              <div className="w-full">
                <p className="text-[10px] text-[#4d4d4d] mx-3 mt-1 font-semibold">
                  4:48 PM
                </p>
              </div>
            </div>
            <div className="h-[88px]">
              <div className="flex flex-row justify-between">
                <p className="text-sm text-[#949494] px-2">Select filters</p>
                <div className="flex flex-row text-sm text-[#666666]">
                  <SlidersHorizontal
                    size={20}
                    strokeWidth={2.5}
                    color="#666666"
                    className="mx-1"
                  />{" "}
                  Filter
                </div>
              </div>
              <div className="w-full flex flex-row flex-wrap">
                <div className="px-2.5 mx-1 flex flex-row my-1 rounded-md justify-center items-center border-[#5b94ee] border-2 bg-[#f6f9ff]">
                  <p className=" text-sm text-[#5b94ee]">Strap - Long</p>{" "}
                  <X
                    size={16}
                    strokeWidth={2.4}
                    color="#5b94ee"
                    className="ml-1"
                  />
                </div>
                <div className="px-2.5 bg-gray-200 mx-1 flex flex-row my-1 rounded-md justify-center items-center">
                  <p className="text-[#737373] text-sm">Colour</p>{" "}
                  <X
                    size={16}
                    strokeWidth={2.4}
                    color="#737373"
                    className="ml-1"
                  />
                </div>
                <div className="px-2.5 bg-gray-200 mx-1 flex flex-row my-1 rounded-md justify-center items-center">
                  <p className="text-[#737373] text-sm">Size</p>{" "}
                  <X
                    size={16}
                    strokeWidth={2.4}
                    color="#737373"
                    className="ml-1"
                  />
                </div>
                <div className="px-2.5 bg-gray-200 mx-1 flex flex-row my-1 rounded-md justify-center items-center">
                  <p className="text-[#737373] text-sm">Brand</p>{" "}
                  <X
                    size={16}
                    strokeWidth={2.4}
                    color="#737373"
                    className="ml-1"
                  />
                </div>
                <div className="px-2.5 bg-gray-200 mx-1 flex flex-row my-1 rounded-md justify-center items-center">
                  <p className="text-[#737373] text-sm">Material</p>{" "}
                  <X
                    size={16}
                    strokeWidth={2.4}
                    color="#737373"
                    className="ml-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-[80px] w-full m-0 p-0 bg-gradient-to-r from-[#eff3fd] to-[#f9fafd]"
          style={{
            borderBottomLeftRadius: "14px",
            borderBottomRightRadius: "14px",
          }}
        >
          <div className="flex justify-center w-full m-0 p-0 my-2">
            <div className="w-[340px] flex flex-row items-center align-middle justify-center">
              <div className="w-[265px] h-[40px] rounded-md mr-2 p-4 bg-white flex flex-row justify-between items-center text-gray-500">
                <p>Type your message</p>
                <Paperclip size={22} strokeWidth={2.5} color="#949494" />
              </div>
              <button className="bg-[#4385ec] w-[70px] rounded-lg h-[40px] flex justify-center items-center">
                <ChevronRight color="white" strokeWidth={2.5} size={28} />
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-sm text-gray-400">
              Powered by{" "}
              <span className="font-semibold text-gray-500">Krunk.ai</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
