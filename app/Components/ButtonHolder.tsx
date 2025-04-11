import Image from "next/image";

export default function ButtonHolder() {
  return (
    <div className="flex">
      <div className="h-[71px] w-[293px] bg-black flex items-center justify-between rounded-full p-2 ">
        <div>
          <Image
            src={"/assets/ButtonHolder.svg"}
            width={48}
            height={48}
            alt="Image"
          />
        </div>
        <div className="text-2xl font-medium text-left">Heading</div>
        <div className="w-12 h-12 rounded-full bg-[#3D3C3C] flex items-center justify-center">
          <Image
            src={"/assets/ButtonHolderArrow.svg"}
            width={16}
            height={16}
            alt="Image"
          ></Image>
        </div>
      </div>
      <div className="w-[70px] h-[70px] rounded-full bg-[#2B2825] flex items-center justify-center">x</div>
    </div>
  );
}
