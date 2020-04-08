import React from 'react'


const TableProduct = () => {
    const arr = {
        daftar: [
          { no: 1, nama: 'Asa', job: 'Berlari'},
          { no: 2, nama: 'Asi', job: 'Menari'},
          { no: 3, nama: 'Asu', job: 'Mendaki'},
          { no: 4, nama: 'Ase', job: 'Bercocok Tanam'}
        ]
      }
    
      const renderArr = () => {
        return arr.daftar.map((daftar) => {
          const {no,nama,job} = daftar
          return (
            <tr>
              <td>{no}</td>
              <td>{nama}</td>
              <td>{job}</td>
            </tr>
          
          )
        })
        }
        // const renderTableHeader = () => {
        //     let header = Object.keys(this.state.students[0])
        //     return header.map((key, index) => {
        //        return <th key={index}>{key.toUpperCase()}</th>
        //     })
        //  }

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
                        <th>
                            {renderHeader()}
                            {renderArr()}
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default TableProduct