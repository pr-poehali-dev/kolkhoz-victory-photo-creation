import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const stats = [
    { label: "Лет работы", value: "78", icon: "Calendar" },
    { label: "Гектаров земли", value: "12 500", icon: "Sprout" },
    { label: "Тонн урожая/год", value: "85 000", icon: "TrendingUp" },
    { label: "Наград", value: "120+", icon: "Award" }
  ];

  const timeline = [
    { year: "1946", event: "Основание колхоза", description: "Объединение крестьянских хозяйств после войны" },
    { year: "1975", event: "Первая тысяча тонн", description: "Достижение рекордного урожая пшеницы" },
    { year: "2010", event: "Модернизация техники", description: "Закупка современного оборудования и комбайнов" },
    { year: "2024", event: "Цифровизация", description: "Внедрение систем точного земледелия и мониторинга" }
  ];

  const products = [
    { 
      name: "Пшеница", 
      description: "Высококачественная озимая и яровая пшеница 3-4 класса", 
      icon: "Wheat",
      volume: "35 000 т/год",
      color: "bg-amber-100 text-amber-800"
    },
    { 
      name: "Подсолнечник", 
      description: "Масличные сорта с содержанием масла до 52%", 
      icon: "Sun",
      volume: "18 000 т/год",
      color: "bg-yellow-100 text-yellow-800"
    },
    { 
      name: "Кукуруза", 
      description: "Зерновая и силосная кукуруза для животноводства", 
      icon: "Flower2",
      volume: "22 000 т/год",
      color: "bg-orange-100 text-orange-800"
    },
    { 
      name: "Овощи", 
      description: "Картофель, морковь, свекла для местного рынка", 
      icon: "Carrot",
      volume: "10 000 т/год",
      color: "bg-green-100 text-green-800"
    }
  ];

  const achievements = [
    { title: "Лучшее хозяйство региона", year: "2023", icon: "Trophy" },
    { title: "Экологический сертификат", year: "2022", icon: "Leaf" },
    { title: "Инновационное предприятие", year: "2021", icon: "Lightbulb" },
    { title: "Социальная ответственность", year: "2020", icon: "Heart" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Sprout" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Колхоз «Победа»</h1>
                <p className="text-sm text-muted-foreground">С 1946 года</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#history" className="text-foreground hover:text-primary transition-colors">История</a>
              <a href="#achievements" className="text-foreground hover:text-primary transition-colors">Достижения</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/bde108df-423b-4f66-9166-7bc60f06825e/files/31fb0515-3301-498f-aa17-011c822e1807.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Традиции. Качество. Урожай.</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Выращиваем лучшие культуры для процветания региона уже 78 лет
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#products" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
              Наша продукция
            </a>
            <a href="#history" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Узнать больше
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} className="text-primary" size={24} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">История развития</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш путь к успеху</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От послевоенного восстановления до современного высокотехнологичного предприятия
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center font-bold text-white mb-2">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && <div className="w-1 h-full bg-secondary/30"></div>}
                </div>
                <Card className="flex-1 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-2">{item.event}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary">Достижения</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Признание и награды</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наша работа отмечена на региональном и федеральном уровнях
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-transform animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={achievement.icon} className="text-secondary" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наша продукция</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выращиваемые культуры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент качественной сельхозпродукции
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 ${product.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={product.icon} size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-3">{product.description}</p>
                    <div className="flex items-center gap-2">
                      <Icon name="Package" className="text-primary" size={16} />
                      <span className="text-sm font-semibold text-primary">{product.volume}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 relative rounded-2xl overflow-hidden max-w-5xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/bde108df-423b-4f66-9166-7bc60f06825e/files/40442e2b-e080-4fc3-9f01-6244bf49f491.jpg" 
              alt="Уборка урожая" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Современная техника</h3>
                <p className="text-lg">Используем новейшие комбайны и системы точного земледелия</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Sprout" size={20} />
                </div>
                <h3 className="text-xl font-bold">Колхоз «Победа»</h3>
              </div>
              <p className="text-white/80">Традиции качества с 1946 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@pobeda-kolhoz.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Россия, Краснодарский край</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Навигация</h4>
              <div className="space-y-2 text-white/80">
                <a href="#history" className="block hover:text-white transition-colors">История</a>
                <a href="#achievements" className="block hover:text-white transition-colors">Достижения</a>
                <a href="#products" className="block hover:text-white transition-colors">Продукция</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-white/60">
            <p>&copy; 2024 Колхоз «Победа». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
