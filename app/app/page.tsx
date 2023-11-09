"use client"
import { useAppSelector } from "@/redux/store"
import AppLayout from "@/src/components/AppLayout/AppLayout";
import MineTemplate from "@/src/components/MineTemplate/MineTemplate";
import SideLayout from "@/src/components/SideLayout/SideLayout";
import WorksContainer from "@/src/components/WorksContainer/WorksContainer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react"
import { toast } from "react-toastify";


export default function Home() {

  const isAuthenticated = useAppSelector((state) => state.authReducer.value.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
      toast.error("You are not authenticated")
    }
  }, [])

  return (
    <AppLayout>
      ESTE ES EL HOME
    </AppLayout>
  )
}
