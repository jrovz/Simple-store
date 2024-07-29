export default function layout({ children }: {children: React.ReactNode}){
    return(
        <main>
            <nav>Navegaciòn de las categorias </nav>
            {children}
        </main>
    )
}