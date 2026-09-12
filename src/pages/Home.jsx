import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'
import listings from '../data/listings'
import categories from '../data/categories'

function Home() {
  return (
    <main className="home">

      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">NIGERIA'S MARKETPLACE</p>

          <h1>
            Discover. Buy. Sell.
            <br />
            Connect.
          </h1>

          <p className="hero-description">
            Discover products, services, properties and brands
            from sellers across Nigeria.
          </p>

          <div className="hero-actions">
            <button>Start Shopping</button>
            <button>Sell Something</button>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading">
          <h2>Explore Categories</h2>
          <a href="#">View all</a>
        </div>

        <div className="categories-grid">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
            />
          ))}

        </div>
      </section>

      <section className="products-section">

        <div className="section-heading">
          <h2>Trending Listings</h2>
          <a href="#">View all</a>
        </div>

        <div className="products-grid">

          {listings.map((listing) => (
            <ProductCard
              key={listing.id}
              title={listing.title}
              price={listing.price}
              location={listing.location}
              category={listing.category}
            />
          ))}

        </div>

      </section>

    </main>
  )
}

export default Home