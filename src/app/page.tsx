'use client'

import Feature from "@/components/feature";
import Footer from "@/components/footer";
import ForWhom from "@/components/for-whom";
import Hero from "@/components/hero";
import Navbar from "@/components/nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
      once: true
    });
  }, []);
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