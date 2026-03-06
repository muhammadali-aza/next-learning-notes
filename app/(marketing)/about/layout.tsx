import { ReactNode } from "react";

export const metadata = {
  title: "About Page",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>About Layout</h1>
      {children}
    </>
  );
}