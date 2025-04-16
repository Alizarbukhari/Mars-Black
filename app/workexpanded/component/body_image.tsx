import Image from "next/image";

interface BodyImageItem {
  id: number;
  title: string;
  maindiv: string[];
  image1: string;
  image2: string;
  imagecss1: string[];
  imagecss2: string[];
  alt: string;
}

export default function Body_Image() {
  const data: BodyImageItem[] = [
    {
      id: 1,
      title: 'Work Expanded',
      image1: '/workexpanded/image1.svg',
      image2: '/workexpanded/image2.png',
      maindiv: ["w-[95%]","h-[1000px]",],
      imagecss1: ["w-[70%]","h-[513px]"],
      imagecss2: ["bottom-0", "right-10", "w-[40%]", "h-[600px]"],
      alt: 'work expanded image',
    },
    {
      id: 2,
      title: 'Work Expanded',
      image1: '/workexpanded/image3.svg',
      image2: '/workexpanded/image4.png',
      maindiv: ["w-[95%]","h-[1000px]","mt-10"],
      imagecss1: ["w-full","h-[513px]"],
      imagecss2: ["bottom-0", "left-10", "w-[40%]", "h-[600px]"],
      alt: 'work expanded image',
    },
    {
      id: 3,
      title: 'Work Expanded',
      image1: '/workexpanded/image5.png',
      image2: '/workexpanded/image7.png',
      maindiv: ["w-[95%]","h-[900px]","mt-10"],
      imagecss1: ["w-[50%]","h-[513px]","absolute","right-0","top-0"],
      imagecss2: ["left-0","bottom-0","w-[65%]","h-[500px]"],
      alt: 'work expanded image',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {data.map((item) => (
        <div key={item.id} className={`${item.maindiv.join(' ')} flex flex-col relative`}>
          <div className={` ${item.imagecss1.join(' ')} `}>
            <Image
              src={item.image1}
              width={1000}
              height={1000}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`absolute  ${item.imagecss2.join(' ')}`}>
            <Image
              src={item.image2}
              width={1000}
              height={1000}
              alt="Second image"
              className="w-full h-full "
            />
          </div>
        </div>
      ))}
    </div>
  );
}