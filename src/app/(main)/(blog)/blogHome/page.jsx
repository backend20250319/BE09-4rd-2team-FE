"use client";
import { useState } from "react";
import ChoiceMenu from "./ChoiceMenu";
import BlogList from "./BlogList";
import blogs from "./blogs.json";

const categories = [...new Set(blogs.map(b => b.category))];

export default function BlogHome() {
    const [selected, setSelected] = useState("전체");
    const filtered = selected === "전체" ? blogs : blogs.filter(b => b.category === selected);

    return (
        <>
            <ChoiceMenu categories={["전체", ...categories]} selected={selected} onSelect={setSelected} />
            <BlogList blogs={filtered} />
        </>
    );
};