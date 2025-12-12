"use client";


import { useQuery } from 'convex/react';
import { Navbar } from './navbar';
import { TemplatesGallery } from './templates-gallery';

import { api } from '../../../convex/_generated/api';
import { useUser } from "@clerk/clerk-react";


const Home = () => {
  const { user, isLoaded } = useUser();

  // Only fetch documents if user is authenticated
  const documents = user ? useQuery(api.documents.get, { userId: user.id }) : [];

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F1F3F4]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Welcome to Docs</h1>
          <p className="mb-6">Please sign in to continue</p>
        </div>
      </div>
    );
  }

  return(
    <div className="min-h-screen flex-col bg-[#F1F3F4]">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div >
      <div className="mt-16">
     <TemplatesGallery />
     {documents?.map((document) => (
      <span key={document._id}>{document.title}</span>
     ))}
     </div>
    </div>
  );
}

export default Home;
