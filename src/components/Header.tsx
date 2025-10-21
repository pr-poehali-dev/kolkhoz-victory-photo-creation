import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Wheat" className="text-primary" size={32} />
            <span className="text-xl font-heading font-bold text-foreground">Колхоз Победа</span>
          </Link>
          
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </Link>
            <Link to="/history" className="text-foreground hover:text-primary transition-colors font-medium">
              История
            </Link>
            <Link to="/achievements" className="text-foreground hover:text-primary transition-colors font-medium">
              Достижения
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors font-medium">
              Продукция
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
