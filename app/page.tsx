'use client'
import { TestAtom } from "@/atoms/TestAtom";
import NonStyledComponent from "@/components/NonStyledComponent";
import StyledComponent from "@/components/StyledComponent";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function Home() {
  const [newTest, setNewTest] = useAtom(TestAtom);

  const UpdateTest = async() => {
      console.log("Update");
      setNewTest({...newTest}); 
  }

  useEffect(() => {
      setInterval(() => UpdateTest(), 1000);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StyledComponent></StyledComponent>
      <NonStyledComponent></NonStyledComponent>
    </main>
  );
}
