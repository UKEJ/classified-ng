function ProductCard({ title, price, location, category }) {
  return (
    <article className="product-card">

      <div className="product-image">
        <span>{category}</span>
      </div>

      <div className="product-info">
        <h3>{title}</h3>

        <p className="product-price">{price}</p>

        <p className="product-location">{location}</p>
      </div>

    </article>
  )
}

export default ProductCard