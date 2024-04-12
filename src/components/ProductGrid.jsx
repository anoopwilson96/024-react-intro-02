import React from 'react';
function ProductGrid(){

  const productList = 
  [
    { id:1,
      title: 'Black Kurta',
      image : './images/black kurta men.webp',
      description: 'Men\'s Kurta XL'  
    },
    { id:2,
      title: 'Crop top',
      image : './images/croptop-1.webp',
      description: 'Women\'s skirt XL'  
    },
    { id:3,
      title: 'Floral shirt',
      image : './images/floral shirt.png',
      description: 'Men\'s Shirt XL'  
    },
    { id:4,
      title: 'Green kurta',
      image : './images/green kurta.webp',
      description: 'Women\'s kurta XL'  
    },
    { id:5,
      title: 'Knit black',
      image : './images/knit black.webp',
      description: 'Women\'s knit blue XL'  
    },
    { id:6,
      title: 'Knit blue',
      image : './images/knit blue.webp',
      description: 'Women\'s knit blue XL'  
    },
    { id:7,
      title: 'Knit green',
      image : './images/knit green.webp',
      description: 'Women\'s knit green XL' 
    },
    { id:8,
      title: 'Knit pink',
      image : './images/knit pink.webp',
      description: 'Women\'s knit pink XL'
    },
    { id:9,
      title: 'Knit red',
      image : './images/knit red.webp',
      description: 'Women\'s knit red XL' 
    }
  ];

  const MyProducts = productList.map(product=>
    
      <div  key={product.id}  className="col-6 col-md-6 col-xl-4  image-fluid d-flex flex-column justify-content-center align-items-center " >
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <span>{product.description}</span>
      <button type="button" className="btn btn-success">
        Add +
      </button>
      </div>
    );

  return(

<section className="section3 mt-5 ">
  <div className="row">
    {MyProducts}
  </div>
  <div className="col-6 col-md-6 col-xl-4 image-fluid d-flex flex-column justify-content-center align-items-center nextPage ">
      <img src="./images/yellow shirt.jpg" alt="" />
      <h3>Explore more</h3>
      <button id="nextPage" type="button" className="btn btn-primary btn-lg">
        Next page
      </button>
  </div>
</section>



 
  

  )
}

export default ProductGrid