export default function Heading({ text }) {
  return (
    <div className="flex space-x-2 justify-left">
      <div>
        <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl  font-medium leading-tight  mb-2.5 mt-10">
          {text}
        </h1>
      </div>
    </div>
  );
}
