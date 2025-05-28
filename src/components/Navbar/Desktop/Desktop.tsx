import { INavbarProps } from "../Navbar";
import { useNavigate } from "react-router-dom";

const Desktop = ({ elements }: INavbarProps ) => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(`${path}`);
    };

    return (
        <div className="w-full h-full hidden justify-start lg:flex flex-row items-center px-8">
            <p className="text-primary text-xl font-medium">Levke Oelke</p>
            <div className="h-full pr-8 ms-auto me-0 flex items-center justify-end gap-6">
                {elements.map((element) => (
                    <button 
                        onClick={() => handleNavigation(element.path)} 
                        key={element.key} 
                        aria-label={`Navigiere zu ${element.title}`}
                        className="relative p-2 text-sm font-medium flex gap-2 items-center text-primary-600 hover:text-primary transition-all duration-300 group"
                    >
                        {element.icon && <span className="transform group-hover:scale-110 transition-transform duration-300">{element.icon}</span>}
                        <span>{element.title}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Desktop;