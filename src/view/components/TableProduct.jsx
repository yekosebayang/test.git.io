import React from 'react'


const TableProduct = () => {
    let arr = [
          { no: 1, nama: 'Asa', job: 'Berlari'},
          { no: 2, nama: 'Asi', job: 'Menari'},
          { no: 3, nama: 'Asu', job: 'Mendaki'},
          { no: 4, nama: 'Ase', job: 'Bercocok Tanam'}
        ]
    
      const renderArr = () => {
        return arr.map((val, index) => {
          return (
            <tr>
              <td>{index+1}</td>
              <td>{val.nama}</td>
              <td>{val.job}</td>
            </tr>
          
          )
        })
      }

        const renderHeader = () => {
           return (
               <tr>
                   <th>No</th>
                   <th>Nama</th>
                   <th>Pekerjaan</th>
               </tr>
           )
         }
    return (
        
        <div>
            <table>
                <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama</th>
                      <th>Pekerjaan</th>
                    </tr>
                </thead>
                <tbody>
                      {renderArr()}
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct