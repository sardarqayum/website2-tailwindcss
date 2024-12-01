import React from "react"


const NewDesign =() =>{
    const NewDesignData =[
        {id: 1,name: "product1", price:120,description: "new look update", Image: "/image10.jpg"},
        {id: 2,name: "product1", price:100,description: "new look update", Image: "/image9.jpg"},
        {id: 3,name: "product1", price:200,description: "new look update", Image: "/image.7.webp"},
        {id: 4,name: "product1", price:300,description: "new look update", Image: "/image6.webp"},
        {id: 5,name: "product1", price:400,description: "new look update", Image: "/image4.png"},
        {id: 6,name: "product1", price:500,description: "new look update", Image: "/image3.jpeg"},
    ];
return(
    <div className="NewDesign grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
        {NewDesignData.map(Design =>(
            <div key={Design.id} className="Design-cart bg-white p-5 rounded-md shadow-md text-center">
             <img src={Design.Image} alt={Design.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"/>
             <h3 className="mt-4 text-2xl font-bold"> {Design.name}</h3>
             <p className="text-gray-500">{Design.description}</p>
             <div className="price text-blue-500 text-xl font-semibold mt-2">&{Design.price}</div>
             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
            </div>
        ))}
    </div>
)

}



export default NewDesign;