"use client";

import { useState, createContext, useContext } from "react";
import React from "react";
import { projectsData } from "@/lib/data";

type ProjectType = (typeof projectsData)[number];

type ProjectDetailsContextProviderProps = {
  children: React.ReactNode;
};

type ProjectDetailsContextType = {
  selectedProject: ProjectType | null;
  isModalOpen: boolean;
  openProjectDetails: (project: ProjectType) => void;
  closeProjectDetails: () => void;
};

export const ProjectDetailsContext =
  createContext<ProjectDetailsContextType | null>(null);

export default function ProjectDetailsContextProvider({
  children,
}: ProjectDetailsContextProviderProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectDetails = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <ProjectDetailsContext.Provider
      value={{
        selectedProject,
        isModalOpen,
        openProjectDetails,
        closeProjectDetails,
      }}
    >
      {children}
    </ProjectDetailsContext.Provider>
  );
}

export function useProjectDetailsContext() {
  const context = useContext(ProjectDetailsContext);
  if (context === null) {
    throw new Error(
      "useProjectDetailsContext must be used within a ProjectDetailsContextProvider"
    );
  }
  return context;
} 