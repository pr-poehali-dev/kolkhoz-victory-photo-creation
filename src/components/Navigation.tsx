import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/history', label: 'История', icon: 'BookOpen' },
    { path: '/achievements', label: 'Достижения', icon: 'Award' },
    { path: '/products', label: 'Продукция', icon: 'Wheat' }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Sprout" className="text-primary" size={32} />
            <span className="font-heading text-xl font-bold text-primary">Колхоз Победа</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary bg-muted font-medium'
                    : 'text-foreground hover:text-primary hover:bg-muted/50'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
