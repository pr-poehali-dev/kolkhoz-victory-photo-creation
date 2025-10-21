import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section 
          className="relative h-[600px] flex items-center justify-center text-white"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/bde108df-423b-4f66-9166-7bc60f06825e/files/387d96cb-5e10-4b1b-82a9-ca8cabb01699.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Колхоз Победа
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Традиции качества и современные технологии в сельском хозяйстве
            </p>
            <Link to="/products">
              <Button size="lg" className="text-lg">
                Наша продукция
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Наши преимущества
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">80 лет опыта</h3>
                <p className="text-muted-foreground">
                  С 1945 года мы работаем на благо страны, совершенствуя методы производства
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Экологичность</h3>
                <p className="text-muted-foreground">
                  Используем органические методы и заботимся о сохранении природных ресурсов
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Tractor" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Современная техника</h3>
                <p className="text-muted-foreground">
                  Инвестируем в новейшее оборудование для повышения эффективности
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  О нашем хозяйстве
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Колхоз "Победа" был основан в 1945 году и с тех пор является одним из 
                  ведущих сельскохозяйственных предприятий региона.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Мы специализируемся на выращивании зерновых культур, овощей и производстве 
                  экологически чистой продукции для населения.
                </p>
                <Link to="/history">
                  <Button variant="outline" size="lg">
                    Узнать больше
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/bde108df-423b-4f66-9166-7bc60f06825e/files/035a749b-d548-4b94-a97d-346e9db08116.jpg"
                  alt="Здание колхоза"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Статистика
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">5000+</div>
                <p className="text-muted-foreground">Гектаров земли</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">250+</div>
                <p className="text-muted-foreground">Сотрудников</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground">Видов культур</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">80</div>
                <p className="text-muted-foreground">Лет истории</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
