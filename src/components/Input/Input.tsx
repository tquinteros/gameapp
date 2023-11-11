import React from "react";
import { InputProps } from "@/types/types";

const Input = ({ label, type, name, value, onChange, placeholder, min, max, className, required }: InputProps) => {
    return (
            <label className="text-sm flex flex-col">{label}
                <input
                    className={`border rounded-md bg-transparent px-2 py-1.5 ${className}`}
                    type={type}
                    name={name}
                    required={required}
                    value={value}
                    min={min}
                    max={max}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </label>
    );
};


export default Input;
