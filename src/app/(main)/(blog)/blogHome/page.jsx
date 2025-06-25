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
        <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", padding: "16px", fontFamily: "NanumGothic"}}>
            <div style={{ textAlign: "center", margin: "54px", alignContent: "center" }}>
                <p style={{lineHeight: "2"}}>로그아웃 상태입니다. <br /> 로그인하여 이웃새글을 확인해보세요.</p>
            </div>
            <div>
            <ChoiceMenu categories={["전체", ...categories]} selected={selected} onSelect={setSelected} />
            <BlogList blogs={filtered} />
            </div>
        </div>
    );
};