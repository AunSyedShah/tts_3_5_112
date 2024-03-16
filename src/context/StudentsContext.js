import { createContext, useContext } from "react";

export const StudentsContext = createContext(); // empty here


export function useStudents() {
    return useContext(StudentsContext);
}
