
export default function Title({titleText}: {titleText: string}) {
  return (
    <div className="w-full border-b-2 border-b-black">
      <h2 className="text-3xl text-black border-b-6 border-b-blue-300 w-fit">{titleText}</h2>
    </div>
  );
}
