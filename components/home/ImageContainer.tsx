import Image from 'next/image';

function ImageContainer({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) {
  return (
    <section className='banner-bg h-[180px] relative'>
      <Image
        src={mainImage}
        fill
        sizes='100vw'
        alt={name}
        className='object-contain'
        priority
      />
    </section>
  );
}
export default ImageContainer;
