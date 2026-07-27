"use client";

import { databases } from "@/lib/appwrite";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export interface AboutPageData {
  title: string;
  biography: string[];
  proPicDark: string;
  total_project: number;
  experience: number;
}

export interface Skill {
  frameworkName: string;
  progress: number;
}

export interface Certification {
  full_name: string;
  name: string;
  provider: string;
  year: string;
  location: string;
  details: string;
  link: string;
}

export interface Project {
  $id: string;
  name: string;
  type: string;
  img: string;
  summary: string;
  technologies: string[];
  githubLink: string;
  link: string;
}

export interface PortfolioData {
  aboutPage: AboutPageData[];
  app_skill: Skill[];
  cyber_skill: Skill[];
  certificationData: Certification[];
  projects: Project[];
}

interface DataContextType {
  data: PortfolioData;
  loading: boolean;
  error: string | null;
  ensureFetched: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const fetchRef = useRef(false);
  const retryCount = useRef(0);
  const [data, setData] = useState({
    aboutPage: [],
    app_skill: [],
    cyber_skill: [],
    certificationData: [],
    projects: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const ensureFetched = useCallback(async () => {
    if (fetchRef.current) return;
    fetchRef.current = true;
    try {
      const databaseId = process.env.NEXT_PUBLIC_DATABASE!;
      const collectionIds = {
        aboutPage: process.env.NEXT_PUBLIC_ABOUT,
        app_skill: process.env.NEXT_PUBLIC_APP_SKILL,
        cyber_skill: process.env.NEXT_PUBLIC_CYBER_SKILL,
        certificationData: process.env.NEXT_PUBLIC_CERTIFICATION,
        projects: process.env.NEXT_PUBLIC_PROJECT,
      };

      const responses = await Promise.all(
        Object.entries(collectionIds).map(async ([key, collectionId]) => {
          const response = await databases.listDocuments(
            databaseId,
            collectionId!,
          );
          return { key, documents: response.documents };
        }),
      );

      const newData = responses.reduce((acc: any, { key, documents }) => {
        acc[key] = documents;
        return acc;
      }, {});

      setData(newData);
      retryCount.current = 0;
    } catch (error) {
      console.error("Error fetching collections:", error);
      retryCount.current += 1;
      if (retryCount.current < 3) {
        fetchRef.current = false;
        setTimeout(() => ensureFetched(), 3000);
        return;
      }
      setError(error instanceof Error ? error.message : "Database unreachable");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error, ensureFetched }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  useEffect(() => {
    context.ensureFetched();
  }, [context.ensureFetched]);
  if (context.error && !context.loading) {
    throw new Error(context.error);
  }
  return context;
};

export const usePrefetchData = () => {
  const context = useContext(DataContext);
  useEffect(() => {
    const id = setTimeout(() => context.ensureFetched(), 0);
    return () => clearTimeout(id);
  }, [context.ensureFetched]);
};
