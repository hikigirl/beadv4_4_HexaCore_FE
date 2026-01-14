import { ProductCard } from '../components/ProductCard';
import './Home.css';

// Mock Data
const DROPPED_PRODUCTS = [
    { id: '1', brand: 'Nike', name: 'Nike Air Force 1 \'07 White', price: 139000, imageUrl: 'https://placehold.co/400x400/png?text=Air+Force+1' },
    { id: '2', brand: 'Adidas', name: 'Adidas Samba OG Cloud White', price: 150000, imageUrl: 'https://placehold.co/400x400/png?text=Samba' },
    { id: '3', brand: 'Supreme', name: 'Supreme Box Logo Hoodie', price: 500000, imageUrl: 'https://placehold.co/400x400/png?text=Supreme' },
    { id: '4', brand: 'New Balance', name: 'New Balance 530 Steel Grey', price: 129000, imageUrl: 'https://placehold.co/400x400/png?text=NB+530' },
];

export const Home = () => {
    return (
        <div className="home-page">
            <section className="hero">
                {/* Placeholder for complex Banner */}
                <div className="hero-banner">
                    <div className="hero-content">
                        <h2>STYLE YOUR <br /> SPRING</h2>
                        <button className="btn-primary">Shop Now</button>
                    </div>
                </div>
            </section>

            <section className="section-container">
                <div className="section-header">
                    <h3>Just Dropped</h3>
                    <span className="section-subtitle">Specially curated for you</span>
                </div>
                <div className="product-grid">
                    {DROPPED_PRODUCTS.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            <section className="section-container">
                <div className="section-header">
                    <h3>Most Popular</h3>
                    <span className="section-subtitle">Trending items right now</span>
                </div>
                <div className="product-grid">
                    {DROPPED_PRODUCTS.map(product => (
                        <ProductCard key={`pop-${product.id}`} {...product} />
                    ))}
                </div>
            </section>
        </div>
    );
};
