function Mensaje ({msg,visible}){
    return visible 
    ?   <div className="mt-4">
            {msg}
        </div>
    : null
}

export default Mensaje