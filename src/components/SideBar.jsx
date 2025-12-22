import Navigation from "./Navigation";

const SideBar = () => {
    return (
        <aside className="hidden sticky top-0 right-0 w-1/3 h-screen bg-white rounded-lg p-6 md:flex md:flex-col justify-between">
            <div>
                <h1 className="text-3xl md:text-5xl text-start font-bold text-emerald-600">Trial Lesson</h1>
            <h2 className="text-start text-gray-500">Pre-Intermediate A2</h2>
            <Navigation />
            </div>
            
            
            <p className="text-neutral-400">Copyright © 2025</p>
        </aside>
    )
}

export default SideBar;