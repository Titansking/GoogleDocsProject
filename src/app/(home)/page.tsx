"use client";

import { usePaginatedQuery } from "convex/react";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";

import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./documents-table";

const Home = () => {
  // const { user, isLoaded } = useUser();

  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    {},
    { initialNumItems: 5 },
  );

  // if (!isLoaded) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  // if (!user) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-[#F1F3F4]">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-semibold mb-4">Welcome to Docs</h1>
  //         <p className="mb-6">Please sign in to continue</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
};

export default Home;
