import React from 'react'


const BookCard = (props) => {
    const {kartuBuku} = props
    const {image,author,title,review,desc,price,discount,
    stock} = kartuBuku

        return(
        <>
            <div className="row mt-5">
                <div className="col-6">
                    <img src={image} width="200px" height="300px"/>    
                </div>
                <div className="col-6" style={{
                    width: "300px",
                    padding: "1px"}}>
                    <div>
                        {author}
                        <h4 className="mb-3">{title}</h4>
                        <strong>{review}/5 Review</strong>
                        <p>{desc}</p>
                    </div>
                    {discount > 0 ? (
                        <h5 className="row container"><div>${(price-(price *(discount/100))).toFixed(2)}</div> <div className="text-secondary text-garis ml-2">${price}</div></h5>
                        ):
                        (<h5>${price}</h5>)  
                    }
                    {stock > 0 ? (
                        <input type="button" className="btn btn-primary" value="Buy Now"/>
                        ): 
                        (<input type="button" className="btn btn-primary" value="Buy Now" disabled/>)  
                    }
                </div>
            </div>
        </>
        )
    }
    


export default BookCard
