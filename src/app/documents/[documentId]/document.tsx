"use client";

import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Toolbar } from "./toolbar";
import { api } from "../../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "../../../../convex/_generated/dataModel";

interface DocumentProps {
    documentId: Id<"documents">;
}

export const Document = ({ documentId }: DocumentProps) => {
    const document = useQuery(api.documents.getById, { id: documentId });

    if (document === undefined) {
        return (
            <div className="min-h-screen bg-[#FAFBFD] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Loading...</h1>
                </div>
            </div>
        );
    }

    if (document === null) {
        return (
            <div className="min-h-screen bg-[#FAFBFD] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Document Not Found</h1>
                    <p className="text-gray-500">The document you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden">
                <Navbar data={document} />
                <Toolbar />
            </div>
            <div className="pt-[114px] print:pt-0">
                <Editor initialContent={document?.initialContent} />
            </div>
        </div>
    );
};
