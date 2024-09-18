import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';

const salesData = [
  {
    product: "Shampoo",
    brand: "L'Oréal",
    jan: 120,
    feb: 88,
    mar: 99,
    total: 1168,
  },
  {
    product: "Shampoo",
    brand: "Dove",
    jan: 100,
    feb: 50,
    mar: 80,
  },
  {
    product: "Shampoo",
    brand: "Pantene",
    jan: 80,
    feb: 69,
    mar: 78,
  },
  {
    product: "Shampoo",
    brand: "Head and Shoulders",
    jan: 90,
    feb: 124,
    mar: 190,
  },
  {
    product: "Conditioner",
    brand: "L'Oréal",
    jan: 111,
    feb: 113,
    mar: 78,
    total: 1512,
  },
  {
    product: "Conditioner",
    brand: "Dove",
    jan: 200,
    feb: 114,
    mar: 88,
  },
  {
    product: "Conditioner",
    brand: "Pantene",
    jan: 240,
    feb: 231,
    mar: 75,
  },
  {
    product: "Conditioner",
    brand: "Head and Shoulders",
    jan: 99,
    feb: 94,
    mar: 69,
  },
  {
    product: "Face Wash",
    brand: "Himalaya",
    jan: 300,
    feb: 200,
    mar: 290,
    total: 2310,
  },
  {
    product: "Face Wash",
    brand: "Nivea",
    jan: 310,
    feb: 140,
    mar: 310,
  },
  {
    product: "Face Wash",
    brand: "WOW",
    jan: 280,
    feb: 380,
    mar: 100,
  },
];

const GroupedTable = () => {
  let previousProduct = null;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="sales table">
        <TableHead>
          <TableRow>
            <TableCell style={{ backgroundColor: '#cfe2f3' }}>Product</TableCell>
            <TableCell style={{ backgroundColor: '#cfe2f3' }}>Brand</TableCell>
            <TableCell style={{ backgroundColor: '#fce5cd' }}>Sales in Jan</TableCell>
            <TableCell style={{ backgroundColor: '#fce5cd' }}>Sales in Feb</TableCell>
            <TableCell style={{ backgroundColor: '#fce5cd' }}>Sales in Mar</TableCell>
            <TableCell style={{ backgroundColor: '#d9ead3' }}>Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {salesData.map((row, index) => {
            const productCell = previousProduct !== row.product
              ? <TableCell rowSpan={salesData.filter(item => item.product === row.product).length}>{row.product}</TableCell>
              : null;

            previousProduct = row.product;

            return (
              <TableRow key={index}>
                {productCell}
                <TableCell>{row.brand}</TableCell>
                <TableCell>{row.jan}</TableCell>
                <TableCell>{row.feb}</TableCell>
                <TableCell>{row.mar}</TableCell>
                <TableCell>{row.total || ''}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GroupedTable;
