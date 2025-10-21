import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const products = [
    {
      category: 'Зерновые культуры',
      icon: 'Wheat',
      items: [
        { name: 'Пшеница озимая', volume: '25 000 тонн/год', quality: 'Класс 3-4' },
        { name: 'Ячмень', volume: '12 000 тонн/год', quality: 'Пивоваренный' },
        { name: 'Кукуруза', volume: '8 000 тонн/год', quality: 'Кормовая' },
        { name: 'Подсолнечник', volume: '5 000 тонн/год', quality: 'Масличный' }
      ]
    },
    {
      category: 'Овощи',
      icon: 'Carrot',
      items: [
        { name: 'Картофель', volume: '3 000 тонн/год', quality: 'Столовый' },
        { name: 'Томаты', volume: '500 тонн/год', quality: 'Тепличные' },
        { name: 'Огурцы', volume: '400 тонн/год', quality: 'Тепличные' },
        { name: 'Капуста', volume: '1 200 тонн/год', quality: 'Белокочанная' }
      ]
    },
    {
      category: 'Бахчевые',
      icon: 'Apple',
      items: [
        { name: 'Арбузы', volume: '2 000 тонн/год', quality: 'Астраханские' },
        { name: 'Дыни', volume: '800 тонн/год', quality: 'Колхозница' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'Органик сертификат',
      description: 'Международная сертификация органического производства',
      icon: 'Badge'
    },
    {
      title: 'ISO 9001',
      description: 'Система менеджмента качества',
      icon: 'CheckCircle'
    },
    {
      title: 'ХАССП',
      description: 'Безопасность пищевой продукции',
      icon: 'Shield'
    },
    {
      title: 'Знак качества',
      description: 'Российский знак качества',
      icon: 'Award'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6">
              Наша продукция
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Выращиваем качественную сельскохозяйственную продукцию с соблюдением всех стандартов
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {products.map((category, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={category.icon as any} className="text-white" size={24} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold">{category.category}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Package" size={16} className="text-primary" />
                            <span className="text-muted-foreground">{item.volume}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Star" size={16} className="text-primary" />
                            <span className="text-muted-foreground">{item.quality}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section 
          className="py-16 relative"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/bde108df-423b-4f66-9166-7bc60f06825e/files/4457c292-c8df-4a1a-a2d4-14adeea3e8c8.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Качество — наш приоритет
              </h2>
              <p className="text-lg mb-8">
                Вся наша продукция проходит строгий контроль качества на каждом этапе производства. 
                Мы используем только проверенные технологии выращивания и современное оборудование.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-heading font-bold mb-2">100%</div>
                  <p className="text-sm">Контроль качества</p>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold mb-2">0</div>
                  <p className="text-sm">ГМО продукции</p>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold mb-2">24ч</div>
                  <p className="text-sm">От поля до склада</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Сертификаты и стандарты
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={cert.icon as any} className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
              <Icon name="Phone" className="text-primary mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-heading font-bold mb-4">
                Заинтересованы в сотрудничестве?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Свяжитесь с нами для обсуждения условий поставки и сотрудничества
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span className="font-semibold">+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <span className="font-semibold">sales@kolhoz-pobeda.ru</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
