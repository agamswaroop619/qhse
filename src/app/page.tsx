"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);
}
