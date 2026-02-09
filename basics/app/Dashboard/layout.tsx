export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <nav></nav>
            <h1>HEADER - Dashboard Page Layout</h1>
            {children}
            <h1>FOOTER - Dashboard Page Layout</h1> 
       </section>
           
    );
}