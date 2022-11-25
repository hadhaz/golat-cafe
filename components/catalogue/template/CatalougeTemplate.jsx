export default function CatalogueTemplate({ data }) {
  return (
    <div className='py-6 gap-2 col-span-5 mt-12 flex flex-col items-center justify-center'>
      <h1 className='font-bold text-3xl lg:text-4xl'>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
