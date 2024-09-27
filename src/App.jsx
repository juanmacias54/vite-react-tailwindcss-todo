import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

function App() {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain  bg-no-repeat bg-gray-300 min-h-screen">
            <header className="container mx-auto px-4">
                <div className="flex justify-between pt-8">
                    <h1 className=" font-semibold tracking-[0.3em] uppercase text-white text-3xl">
                        ToDo
                    </h1>
                    <button>
                        <MoonIcon className="fill-red-400" />
                    </button>
                </div>
                <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
                    <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
                    <input
                        type="text"
                        placeholder="crear nuevo todo?"
                        className="w-full text-gray-400  outline-none"
                    />
                </form>
            </header>
            <main className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md [&>article]:p-4">
                    <article className="flex gap-4 py-4 border-b border-b-gray-400 ">
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none "></button>
                        <p className="text-gray-600 grow">
                            completar curso javascript curso
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 py-4 border-b border-b-gray-400 ">
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none "></button>
                        <p className="text-gray-600 grow">
                            completar curso javascript curso
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 py-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none "></button>
                        <p className="text-gray-600 grow">
                            completar curso javascript curso
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 py-4 border-b border-b-gray-400 ">
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none "></button>
                        <p className="text-gray-600 grow">
                            completar curso javascript curso
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 py-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none "></button>
                        <p className="text-gray-600 grow">
                            completar curso javascript curso
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <section className=" py-4 px-4 flex justify-between border-t border-t-gray-400">
                        <span className="text-gray-400">5 item left</span>
                        <button className="text-gray-400">
                            clear completed
                        </button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto mt-8 px-4">
                <div className="bg-white flex justify-center rounded-md p-4 gap-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <p className="text-center mt-8">drag and drop to react</p>
        </div>
    );
}

export default App;
