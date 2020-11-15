export default function PageTitle({ children }) {
  return (
    <h1 className="text-3xl leading-14 font-bold text-gray-900 tracking-tight sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
      {children}
    </h1>
  )
}
