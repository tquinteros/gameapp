import { WorkLinks } from "@/data/navLinks";
import Link from "next/link";
import React from "react";

const WorksContainer = () => {
    return (
        <div className="flex gap-24">
            {
                WorkLinks.map((link, index) => {
                    return (
                        <Link key={index} href={link.href}>{link.name}</Link>
                    )
                })
            }
        </div>
    )
}

export default WorksContainer;