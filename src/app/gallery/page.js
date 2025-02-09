import Image from "next/image";
import nextjsImg from "../../assets/nextjs.png";
export default function GalleryPage() {
  return (
    <div className="text-center space-y-4">
      <h1>Normal image</h1>
      <Image
        height={500}
        width={500}
        className="mx-auto"
        src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
        alt="nextjs image"
      />
      <h1>Local image</h1>
      <Image
        height={500}
        width={500}
        className="mx-auto"
        src={nextjsImg}
        alt="nextjs image"
      />

      <h1>Nextjs image</h1>
      <Image
        className="mx-auto"
        height={500}
        width={500}
        src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
        alt="next-js-img"
      />
    </div>
  );
}
