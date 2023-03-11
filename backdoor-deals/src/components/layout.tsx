type LayoutProps = {
    children: string | JSX.Element | JSX.Element[];
  };

export default function Layout({ children } : LayoutProps){
    return (
        <main className=" bg-stone-900 border-dashed max-h-screen">
          <div className="grid text-center justify-items-center">
            <h1 className=" text-4xl font-bold text-white">
            <span className="text-6xl text-purple-800">B</span>ackroom
            <span className="text-6xl text-purple-800">D</span>eals
            </h1>
          </div>
          {children}
        </main>
    )
}

