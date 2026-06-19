"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { databases } from "@/lib/appwrite";

interface DataContextType {
  data: {
    home_pageData: any[];
    aboutPage: any[];
    app_skill: any[];
    cyber_skill: any[];
    certificationData: any[];
    projects: any[];
  };
  loading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState({
    home_pageData: [],
    aboutPage: [],
    app_skill: [],
    cyber_skill: [],
    certificationData: [],
    projects: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCollections = async () => {
      try {
        const databaseId = process.env.NEXT_PUBLIC_DATABASE!;
        const collectionIds = {
          home_pageData: process.env.NEXT_PUBLIC_HOME_DATA,
          aboutPage: process.env.NEXT_PUBLIC_ABOUT,
          app_skill: process.env.NEXT_PUBLIC_APP_SKILL,
          cyber_skill: process.env.NEXT_PUBLIC_CYBER_SKILL,
          certificationData: process.env.NEXT_PUBLIC_CERTIFICATION,
          projects: process.env.NEXT_PUBLIC_PROJECT,
        };

        const responses = await Promise.all(
          Object.entries(collectionIds).map(async ([key, collectionId]) => {
            const response = await databases.listDocuments(databaseId, collectionId!);
            return { key, documents: response.documents };
          })
        );

        const newData = responses.reduce((acc: any, { key, documents }) => {
          acc[key] = documents;
          return acc;
        }, {});

        setData(newData);
      } catch (error) {
        console.error("Error fetching collections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCollections();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
