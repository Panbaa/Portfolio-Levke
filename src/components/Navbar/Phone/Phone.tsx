import { useState } from "react";
import { INavbarProps } from "../Navbar";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Phone = ({ elements }: INavbarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    }

    const handleNavigation = (path: string) => {
        navigate(`${path}`);
    };
    
    return (
        <div className="relative text-primary h-full w-full">                <div className="w-full h-full flex items-center justify-between lg:hidden px-4">
                <p className="ms-3 text-primary text-xl font-medium">Levke Oelke</p>
                <div className="h-full flex items-center justify-end">
                    <button 
                        onClick={handleButtonClick} 
                        className="p-2 rounded-full hover:bg-primary-50/10 text-primary-600 hover:text-primary transition-colors duration-300"
                        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="absolute top-full right-0 w-full max-w-96 bg-neutral-50 border-t border-primary-200/10 lg:hidden divide-y divide-primary-100/10 backdrop-blur-md shadow-lg">
                    {elements.map((element) => (
                        <button 
                            onClick={() => {
                                handleNavigation(element.path);
                                handleButtonClick();
                            }} 
                            key={element.key} 
                            className="w-full p-4 text-sm font-medium text-left flex items-center gap-3 text-primary-600 hover:text-primary hover:bg-primary-50/10 transition-all duration-300"
                        >
                            {element.icon && <span className="transform transition-transform duration-300">{element.icon}</span>}
                            <span>{element.title}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Phone;