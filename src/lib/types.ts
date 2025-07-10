import { ReactNode } from "react";

export interface INavbarElement {
    title: string;
    path: string;
    key?: string;
    icon?: ReactNode;
}

export type NavbarElement = INavbarElement;

export interface IProject {
    id: string;
    title: string;
    aufgabe: string;
    rahmenbedingungen: string;
    herausforderung: string;
    images: string[];
    year: number;
    location: string;
    category: string;
}