export default function Header({ headerText, paragraph }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">{headerText}</h2>
      {paragraph && <p className="mt-4 text-center">{paragraph}</p>}
    </>
  );
}
