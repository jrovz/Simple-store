interface categoryProps{

    params : {
        categories : string[],
        searchParams : string
    }
}

export default function categories(props:categoryProps){
    console.log(props)
   const{categories} = props.params
   console.log(categories)
    return(
        <h1>Categoria dinamica: {categories}</h1>
    )
}