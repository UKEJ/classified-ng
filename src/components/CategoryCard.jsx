function CategoryCard({ name, description }) {
  return (
    <article className="category-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default CategoryCard