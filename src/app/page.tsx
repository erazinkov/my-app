'use client';

import Image from 'next/image'
import { ReactNode, useEffect, useState } from 'react'

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

type Product = {
  category: string, 
  price: string, 
  stocked: boolean, 
  name: string
}

function ProductRow({
  product
} : {
  product: Product
}) {

  return (
    <tr>
      {
        product.stocked ? <td>{product.name}</td> : <td><span className='text-[#ff0000]'>{product.name}</span></td>
      }
      <td>{product.price}</td>
    </tr>
  )
}

function ProductCategoryRow({
  product
} : {
  product: Product
}) {
  return (
    <tr>
      <th colSpan={2}>{product.category}</th>
    </tr>
  )
}

function ProductTable({
  products,
  filterText,
  inStockOnly
}: {
  products: Product[],
  filterText: string,
  inStockOnly: boolean
}) {
  let lastCategory: string = ''
  let rows: ReactNode[] = []
  products.forEach((product, index) => {
    
      if (product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1) {
        return
      }
    
    
    if (inStockOnly && !product.stocked) {
      return
    }
    if (lastCategory !== product.category) {
      rows.push(
        <ProductCategoryRow product={product} key={index}/>
      )
    }
    rows.push(
      <ProductRow product={product} key={index + 100}/>
    )
    lastCategory = product.category
  })
  return (
      <table className="table-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
      </table>
  )
}

function SearchBar(
  {
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
  }: {
    filterText: string,
    inStockOnly: boolean,
    onFilterTextChange: (e: string) => void,
    onInStockOnlyChange: (e: boolean) => void
  }) {
  return (
    <form className='flex flex-col'>
      <input 
        type='text'
        value={filterText}
        placeholder='Search...'
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input 
          type='checkbox'
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable({
  products
}: {
  products: Product[]
}) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div className='max-w-fit'>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} 
      />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <FilterableProductTable products={PRODUCTS}/>
    </div>
  )
}
