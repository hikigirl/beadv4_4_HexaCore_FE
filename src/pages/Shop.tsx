import { ProductCard } from '../components/ProductCard';
import './Shop.css';

const SHOP_PRODUCTS = [
    { id: '1', brand: 'Nike', name: 'Nike Air Force 1 \'07 White', price: 139000, imageUrl: 'https://placehold.co/400x400/png?text=Air+Force+1' },
    { id: '2', brand: 'Adidas', name: 'Adidas Samba OG Cloud White', price: 150000, imageUrl: 'https://placehold.co/400x400/png?text=Samba' },
    { id: '3', brand: 'Supreme', name: 'Supreme Box Logo Hoodie', price: 500000, imageUrl: 'https://placehold.co/400x400/png?text=Supreme' },
    { id: '4', brand: 'New Balance', name: 'New Balance 530 Steel Grey', price: 129000, imageUrl: 'https://placehold.co/400x400/png?text=NB+530' },
    { id: '5', brand: 'Nike', name: 'Nike Dunk Low Retro Black White', price: 129000, imageUrl: 'https://placehold.co/400x400/png?text=Dunk+Low' },
    { id: '6', brand: 'Jordan', name: 'Jordan 1 Retro High OG', price: 239000, imageUrl: 'https://placehold.co/400x400/png?text=Jordan+1' },
    { id: '7', brand: 'Stussy', name: 'Stussy World Tour Tee', price: 68000, imageUrl: 'https://placehold.co/400x400/png?text=Stussy' },
    { id: '8', brand: 'Apple', name: 'AirPods Max Silver', price: 769000, imageUrl: 'https://placehold.co/400x400/png?text=AirPods' },
];

export const Shop = () => {
    return (
        <div className="shop-page">
            <div className="shop-container">
                <aside className="shop-sidebar">
                    <div className="filter-section">
                        <h4>CATEGORY</h4>
                        <ul>
                            <li><button>Sneakers</button></li>
                            <li><button>Clothing</button></li>
                            <li><button>Accessories</button></li>
                            <li><button>Tech</button></li>
                        </ul>
                    </div>
                    <div className="filter-section">
                        <h4>BRAND</h4>
                        <ul>
                            <li><button>Nike</button></li>
                            <li><button>Adidas</button></li>
                            <li><button>New Balance</button></li>
                            <li><button>Jordan</button></li>
                        </ul>
                    </div>
                </aside>

                <main className="shop-content">
                    <div className="shop-header">
                        <h2>SHOP</h2>
                    </div>
                    <div className="product-grid shop-grid">
                        {SHOP_PRODUCTS.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};
