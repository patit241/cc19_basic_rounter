import React from 'react'

function Recap() {
    const obj ={firstName:'patit',
        lastName:'wor'
    }

    obj.address = 'BKK'

    const obj2 ={street:'1234',
        zipcode:'5678'
    }

    const mergeObj = {...obj,...obj2}
    console.log(mergeObj)

    const arr =['tit','worasathit']
    arr[2] = 'BKK'
    console.log(arr)


    const arr2 =['123','456']
    const mergearr=[...arr,...arr2]

    console.log(mergearr)

    const products =[
        {id:1,title:'ASUS',price:4000},
        {id:2,title:'MSI',price:2000}
    ]

    const newProduct= {id:3,title:'lenovo',price:2000}
    const mergeArrObj=[...products,newProduct]
    console.log(mergeArrObj)


  return (
    <div>Easy , Zustand</div>
  )
}

export default Recap