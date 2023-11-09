import React, { ReactNode } from "react";
import SideLayout from "../SideLayout/SideLayout";
import Header from "../Header/Header";

type AppLayoutProps = {
    children: ReactNode;
    className?: string;
};

const AppLayout = ({ children, className }: AppLayoutProps) => {
    return (
        <>
            <Header />
            <div className={`grid min-h-screen grid-cols-12 gap-8 ${className}`}>
                <SideLayout />
                <div className="col-span-12 md:col-span-9 xl:col-span-10 p-8 border-blue-500 border">
                    {children}
                </div>
            </div>
        </>
    )
}

export default AppLayout;
