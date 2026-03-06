import Link from "next/link"


export const metadata = {
  default: "Next.js Learning Notes",
  title: {
    template: "%s - Next.js Learning Notes",
  }
}

// export const metadata = {
//   title: "Next.js Learning Notes",
//   description: "Notes for learning Next.js",
// }


export default function Home() {
  return <>
  <h1>Home Page</h1>
  <Link href="/about">About</Link>
  </>
}