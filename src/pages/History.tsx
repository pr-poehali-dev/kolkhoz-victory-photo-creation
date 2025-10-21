import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const History = () => {
  const timeline = [
    {
      year: '1945',
      title: 'Основание колхоза',
      description: 'После победы в Великой Отечественной войне был основан колхоз "Победа". Первые колхозники начали обрабатывать 500 гектаров земли.',
      icon: 'Flag'
    },
    {
      year: '1960',
      title: 'Механизация производства',
      description: 'Приобретены первые тракторы и комбайны. Производительность труда увеличилась в 3 раза.',
      icon: 'Tractor'
    },
    {
      year: '1985',
      title: 'Расширение территории',
      description: 'Площадь хозяйства увеличена до 3000 гектаров. Освоены новые направления производства.',
      icon: 'TrendingUp'
    },
    {
      year: '2000',
      title: 'Модернизация',
      description: 'Внедрение современных технологий обработки земли и цифровизация управления хозяйством.',
      icon: 'Cpu'
    },
    {
      year: '2015',
      title: 'Органическое направление',
      description: 'Запуск производства экологически чистой продукции. Получение международных сертификатов качества.',
      icon: 'Leaf'
    },
    {
      year: '2025',
      title: 'Новый этап развития',
      description: 'Площадь хозяйства достигла 5000 гектаров. Внедрение инновационных агротехнологий и точного земледелия.',
      icon: 'Rocket'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6">
              История колхоза
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              80 лет традиций, развития и достижений на благо страны
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className="flex gap-8 items-start animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-24 text-right">
                      <div className="text-3xl font-heading font-bold text-primary">
                        {item.year}
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Icon name={item.icon as any} className="text-white" size={28} />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-primary/30" />
                      )}
                    </div>
                    
                    <div className="flex-1 pb-12">
                      <h3 className="text-2xl font-heading font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8">
                Наследие и традиции
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg mb-4">
                  Колхоз "Победа" был создан в год великой победы нашего народа. 
                  Это имя стало символом трудового подвига, стремления к развитию 
                  и процветанию родной земли.
                </p>
                <p className="text-muted-foreground text-lg mb-4">
                  На протяжении восьми десятилетий наше хозяйство прошло путь от 
                  небольшого коллективного хозяйства до современного 
                  высокотехнологичного агропредприятия. При этом мы сохранили 
                  главное — уважение к земле, преданность делу и заботу о людях.
                </p>
                <p className="text-muted-foreground text-lg">
                  Сегодня колхоз "Победа" — это крупное многопрофильное хозяйство, 
                  где работают специалисты высочайшего класса, применяются 
                  передовые технологии, но при этом бережно хранятся традиции 
                  российского земледелия.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default History;
