import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Wheat" className="text-primary" size={28} />
              <span className="text-lg font-heading font-bold">Колхоз Победа</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Традиции сельского хозяйства с 1945 года
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Россия, Краснодарский край</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@kolhoz-pobeda.ru</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">О нас</h3>
            <p className="text-sm text-muted-foreground">
              Мы выращиваем качественную сельскохозяйственную продукцию, 
              используя современные технологии и сохраняя лучшие традиции.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © 2025 Колхоз Победа. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
