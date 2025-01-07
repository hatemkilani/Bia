import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import axios from "axios";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    axios
      .get("http://localhost:3002/api/products")
      .then((response) => setProducts(response.data))
      .catch(() => message.error("Failed to fetch products"));
  }, []);

  // Delete a product
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3002/api/products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product._id !== id));
        message.success("Product deleted successfully");
      })
      .catch(() => message.error("Failed to delete product"));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Actions",
      render: (text, record) => (
        <>
          <Button type="link">Edit</Button>
          <Button type="link" danger onClick={() => deleteProduct(record._id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>Manage Products</h1>
      <Table dataSource={products} columns={columns} rowKey="_id" />
    </div>
  );
};

export default ManageProducts;
