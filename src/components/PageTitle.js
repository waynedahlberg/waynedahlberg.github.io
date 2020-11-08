export default function PageTitle({ children }) {
  return (
    <h1 className="text-5xl leading-14 font-bold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
