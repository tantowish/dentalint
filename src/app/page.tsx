import Feature from "@/components/feature";
import Footer from "@/components/footer";
import ForWhom from "@/components/for-whom";
import Hero from "@/components/hero";
import Navbar from "@/components/nav";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ForWhom/>
      <Feature/>
      <Footer />
    </>
  );
}