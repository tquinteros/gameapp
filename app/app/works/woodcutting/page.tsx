"use client"
import { useAppSelector } from "@/redux/store"
import MineTemplate from "@/src/components/MineTemplate/MineTemplate";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react"
import { toast } from "react-toastify";
import Link from "next/link";
import AppLayout from "@/src/components/AppLayout/AppLayout";


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
      WOODCUTTING
    </AppLayout>
  )
}
