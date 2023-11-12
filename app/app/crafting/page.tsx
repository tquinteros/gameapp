"use client"
import { useAppSelector } from "@/redux/store"
import AppLayout from "@/src/components/AppLayout/AppLayout";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react"
import { toast } from "react-toastify";
import CraftingTemplate from "@/src/components/CraftingTemplate/CraftingTemplate";

export default function Home() {

  const isAuthenticated = useAppSelector((state) => state.authReducer.value.isAuthenticated);
  const user = useAppSelector((state) => state.authReducer.value.inventory);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
      toast.error("You are not authenticated")
    }
  }, [])

  return (
    <AppLayout>
      <CraftingTemplate />
    </AppLayout>
  )
}
