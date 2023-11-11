"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { logIn, logOut, toggleAdmin } from "@/redux/features/auth"
import Link from "next/link";
// import axios from "axios";
import { users } from "@/data/users";
import Input from "../Input/Input";

const LoginTemplate = () => {
    const router = useRouter();
    const [headerHeight, setHeaderHeight] = useState(0);
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useDispatch<AppDispatch>();
    const isAuthenticated = useAppSelector((state: any) => state.authReducer.value.isAuthenticated);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/app');
            toast.error("You are already logged in", {
                position: "bottom-center"
            })
        }
    }, [router])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const foundUser = users.find(user => user.username === username && user.password === password)
        if (foundUser) {
            dispatch(logIn({
                username, isAdmin: foundUser.isAdmin, gold: foundUser.gold, level: foundUser.level, experience: foundUser.experience, skillsLevels: foundUser.skillsLevels, inventory: foundUser.inventory,
                inventorySlots: foundUser.inventorySlots,

            }));
            router.push('/app/');
            toast.success(`Welcome ${username}`)
        }
        if (!foundUser) {
            toast.error("Invalid username or password", {
                position: "bottom-center"
            })
            return;
        }
    }

    return (
        <div
            style={{ height: `calc(100vh - ${headerHeight}px)` }}
            className="flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex test justify-center flex-col gap-8 items-center border-2 border-black w-[90%] md:w-[60%] lg:w-[30%] h-[500px] rounded-lg">
                <h3>User: admin | Password: admin</h3>
                <h3>User: user | Password: user</h3>
                <div className="flex flex-col gap-4">

                    <label className="flex gap-4 flex-col">
                        <Input
                            label="Username"
                            type="text"
                            name="username"
                            value={username}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                    </label>
                    <label className="flex gap-4 flex-col">
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </label>
                    <button type="submit">Log In</button>
                </div>
                <Link className="underline hover:opacity-75 duration-300" href="/store">Proceed without user</Link>
            </form>
            {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="mb-12">
                    <h3 className="text-center text-xl font-bold mb-4">Fake Ecommerce</h3>
                    <p>Welcome, in this ecommerce a fakeapi (dummyproducts) is used and the products are saved in the global state (Redux) where later from the admin panel you will be able to create, edit and delete products.</p>

                </div>
            </Modal> */}
        </div>
    )
}

export default LoginTemplate;