import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "£100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeh6zlncGYdV6luBNIicOdFQEgkaFjyqsyVjImG8HTG1CsB7amyNSOntIgcF1DJK3vSxNssGrF&usqp=CAc",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook.",
    price: "£40",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPeM9l1WIJiPqhzeLkeTWG8towrOwvkbMHgfSooTgftfDR8RQ_C9t9_sS0bA&usqp=CAc",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
