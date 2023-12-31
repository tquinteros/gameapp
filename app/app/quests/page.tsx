"use client"
import { useAppSelector } from "@/redux/store"
import AppLayout from "@/src/components/AppLayout/AppLayout";
import QuestTemplate from "@/src/components/QuestTemplate/QuestTemplate";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react"
import { toast } from "react-toastify";


export default function Home() {

  const isAuthenticated = useAppSelector((state) => state.authReducer.value.isAuthenticated);
  const user = useAppSelector((state) => state.authReducer.value.inventory);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
      toast.error("You are not authenticated")
    }
    console.log(user, "inventario")
  }, [])

  return (
    <AppLayout>
      <QuestTemplate />
    </AppLayout>
  )
}
