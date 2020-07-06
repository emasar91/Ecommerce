export default function AgregarReview(){
    return(
        <Link to={'/reviews/:idProduct/:idUser'}>
            <button type="button" className="btn btn-primary"  value="Agregar Review">Agregar Review</button>
              </Link>
    )
    
} 