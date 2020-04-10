import React from 'react'

const ProductCart = (props) => {
    
    const {productData} = props;
    const {nama, harga, desc, disc, stock} = productData;

    const renderItem = () => {
        if (stock > 0) {
          return (
              <>
                <h3>Nama: {nama}</h3>
                <h4>Price: Rp {harga}</h4>
                {//  if tenary   
                disc > 0 ? (
                    <h4>
                        Diskon {disc}% menjadi {harga - (harga * (disc/100))}
                    </h4>
                ) : null}
                <p>Desc: {desc}</p>
              </>
          )  
        }
        else{
            return <h2>stock kosong</h2>
        }
    }
           
    return(
        <div
            style={{
                width: "240px",
                padding: "16px",
                border: "1px solid black",
                borderRadius: "7px"
            }}
            >{renderItem()}
            </div>
    )
}

export default ProductCart