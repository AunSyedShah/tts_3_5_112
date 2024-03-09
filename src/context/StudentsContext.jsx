import { createContext, useState, useContext } from 'react';

const StudentsContext = createContext(); // step 1

export default function StudentsProvider(props) {
    const [students, setStudents] = useState([]); // step 2

    return (
        // step 3
        <StudentsContext.Provider value={{ students, setStudents }}>
            {props.children}
        </StudentsContext.Provider>
    );
};

// export const useStudents = () => useContext(StudentsContext);
// step 4
export function useStudents() {
    return useContext(StudentsContext);
}
