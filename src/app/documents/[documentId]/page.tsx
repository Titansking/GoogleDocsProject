import { Document } from "./document";
import { Id } from "../../../../convex/_generated/dataModel";

interface DocumentIdPageProps {
    params: Promise<{documentId: string}>;
};

const DocumentIdPage = async ({params}: DocumentIdPageProps) => {
    const {documentId} = await params;

    return (
      <Document documentId={documentId as Id<"documents">} />
    );
}
export default DocumentIdPage;
      